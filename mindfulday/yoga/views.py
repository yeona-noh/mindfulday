from django.shortcuts import render
from .models import YogaContents
from .serializers import YogaContentSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET'])
@permission_classes([AllowAny])
def yoga_video_list(request):
    if request.method == 'GET':
        yoga_list = YogaContents.objects.all()
        serializer = YogaContentSerializer(yoga_list, many=True, context={'request': request})
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def yoga_list_detail(request, id):
    try:
        yoga_list = YogaContents.objects.get(pk=id)
    except YogaContents.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = YogaContentSerializer(yoga_list, context={'request': request})
        return Response(serializer.data)
