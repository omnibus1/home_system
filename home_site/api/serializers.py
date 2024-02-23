from rest_framework import serializers
from .models import DeviceModel


class DeviceSerializer(serializers.Serializer):
    status = serializers.SerializerMethodField()
    id = serializers.CharField()

    class Meta:
        model = DeviceModel
        fields = ["id", "status"]

    def get_status(self, obj):
        return obj.get_status()
