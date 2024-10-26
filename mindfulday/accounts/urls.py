# from .views import CreateUserView
# from django.urls import path, include
# from rest_framework_simplejwt import TokenObtainPairView, TokenRefreshView

# urlpatterns = [
#     path('account/user/register/', CreateUserView.as_view(), name='register'),
#     path('account/token/', TokenObtainPairView.as_view(), name='get_token'),
#     path('account/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
#     path('account-auth/', include('rest_framework.urls')),
# ]