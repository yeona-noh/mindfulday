from django.urls import path
from . import views

urlpatterns = [
    path('yoga/', views.yoga_video_list),
    path('yoga/<int:id>', views.yoga_list_detail),
]