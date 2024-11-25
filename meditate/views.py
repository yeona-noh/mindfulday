from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import MeditateContents
from .serializers import MeditateContentSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def meditation_video_list(request):
    if request.method == 'GET':
        meditation_list = MeditateContents.objects.all()
        serializer = MeditateContentSerializer(meditation_list, many=True, context={'request': request})
        return Response(serializer.data)
    
@api_view(['GET'])
@permission_classes([AllowAny])
def meditaion_list_detail(request,id):
    try: 
        meditation_list = MeditateContents.objects.get(pk=id)
    except MeditateContents.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUNT)
    
    if request.method == 'GET':
        serializer = MeditateContentSerializer(meditation_list, context={'request': request})
        return Response(serializer.data)
