from rest_framework import serializers
from .models import YogaContents
class YogaContentSerializer(serializers.ModelSerializer):
    video_file_url = serializers.SerializerMethodField()
    thumbnail_url = serializers.SerializerMethodField()

    class Meta:
        model = YogaContents
        fields = '__all__'
    def get_video_file_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.videos.url)
        return obj.videos.url
    def get_thumbnail_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.thumbnails.url)
        return obj.thumbnails.url
