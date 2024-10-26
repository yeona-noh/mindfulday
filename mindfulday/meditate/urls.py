from django.urls import path
from meditate import views

urlpatterns = [
    path('meditations/', views.meditation_video_list),
    path('meditations/<int:id>', views.meditaion_list_detail)
]