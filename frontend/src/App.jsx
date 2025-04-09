import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/tasks/');
      setTasks(res.data);
    } catch (err) {
      setError('Failed to load tasks');
    }
  };

  const addTask = async () => {
    if (!title.trim()) {
      setError('Task title cannot be empty');
      return;
    }
    
    try {
      await axios.post('http://localhost:8000/api/tasks/', { title });
      setTitle('');
      setError('');
      await fetchTasks(); // Refresh the task list
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add task');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Task Manager</h1>
      
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
          style={{ 
            padding: '8px',
            flexGrow: 1,
            marginRight: '10px'
          }}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button 
          onClick={addTask}
          style={{ 
            padding: '8px 15px',
            background: '#87CEEB',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      <div>
        {tasks.map(task => (
          <div key={task.id} style={{
            background: 'white',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginTop: 0 }}>{task.title}</h3>
            <p>Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
