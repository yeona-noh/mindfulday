from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
from . import views
from accounts.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('', include('meditate.urls')),
    path('', include('yoga.urls')),
    # path('', include('accounts.urls')),
    path('account/user/register/', CreateUserView.as_view(), name='register'),
    path('account/token/', TokenObtainPairView.as_view(), name='get_token'),
    path('account/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('account-auth/', include('rest_framework.urls')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
