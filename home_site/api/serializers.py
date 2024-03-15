from rest_framework import serializers
from .models import DeviceModel, Image
from home_site.get_setting import get_setting

class DeviceSerializer(serializers.Serializer):
    status = serializers.SerializerMethodField()
    id = serializers.CharField()

    class Meta:
        model = DeviceModel
        fields = ["id", "status"]

    def get_status(self, obj):
        return obj.get_status()


class ImageSerializer(serializers.Serializer):
    id = serializers.CharField()
    image = serializers.SerializerMethodField()
    small_image = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ["id", "image", "small_image"]

    def get_image(self, obj):
        return f"http://{get_setting('HOST', '127.0.0.1')}:8000/media/{obj.image}"

    def get_small_image(self, obj):
        return f"http://{get_setting('HOST', '127.0.0.1')}:8000/media/{obj.small_image}"
