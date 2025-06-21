
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


# @api_view(['POST'])
# def userLogin(request):
#     if request.method == 'POST':
#         username = request.data.get('username')
#         password = request.data.get('password')

#         user = authenticate(username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return Response({"message": "login success"}, status=status.HTTP_200_OK)
#         else:
#             return Response({"message": "login failed"}, status=status.HTTP_401_UNAUTHORIZED)
#     else:
#         return Response({"message": "Method not allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
@method_decorator(csrf_exempt, name='dispatch')
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]