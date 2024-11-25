from django.db import models

# Create your models here.
class YogaContents(models.Model):
    FIRST = '10-20 min'
    SECOND = '30-60 min'
    THIRD = '60 min and more'

    video_length = [
        (FIRST, '10-20 min'),
        (SECOND, '30-60 min'),
        (THIRD, '60 min or longer'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    videos = models.FileField(upload_to='media/yoga/%Y/%m/%d/')
    thumbnails = models.ImageField(upload_to='media/yoga/%Y/%m/%d', default='/default.jpg')
    length = models.CharField(
        max_length=20,
        choices=video_length,
        default=FIRST
    )

    def __str__(self):
        return self.title