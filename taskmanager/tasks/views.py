from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task

@api_view(['GET', 'POST'])
def task_list(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        return Response([{
            'id': t.id,
            'title': t.title,
            'status': t.status
        } for t in tasks])
    
    if request.method == 'POST':
        # Add this validation and creation logic
        title = request.data.get('title')
        if not title:
            return Response({'error': 'Title is required'}, status=400)
            
        task = Task.objects.create(
            title=title,
            status='To Do'  # Default status
        )
        return Response({
            'id': task.id,
            'title': task.title,
            'status': task.status
        }, status=201)
