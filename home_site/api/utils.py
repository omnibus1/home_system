from rest_framework import generics, mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import *
from .models import DeviceModel
from .serializers import DeviceSerializer


class DeviceApiView(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = DeviceSerializer

    def get_queryset(self):
        return DeviceModel.objects.all()

    def get_device_id_from_request(self):
        return self.request.query_params.get("id", "-1")

    def get_list_of_devices(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def device_with_id_does_not_exist(self, device_id):
        return Response({"error": f"Device with id {device_id} does not exist"}, HTTP_400_BAD_REQUEST)
