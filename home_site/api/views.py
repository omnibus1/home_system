from rest_framework.response import Response
from .models import *
from .utils import  DeviceApiView
from rest_framework.views import APIView
from rest_framework import generics, mixins
from .serializers import DeviceSerializer


class TurnDeviceOn(DeviceApiView):
    def get(self, request):
        device_id = self.get_device_id_from_request()
        if not DeviceModel.objects.filter(id=device_id).exists():
            return self.device_with_id_does_not_exist(device_id)

        device = DeviceModel.objects.get(id=device_id).get_device()

        device.turn_on()
        return self.get_list_of_devices(request)


class TurnDeviceOff(DeviceApiView):
    def get(self, request):
        device_id = self.get_device_id_from_request()
        if not DeviceModel.objects.filter(id=device_id).exists():
            return self.device_with_id_does_not_exist(device_id)

        device = DeviceModel.objects.get(id=device_id).get_device()

        device.turn_off()
        return self.get_list_of_devices(request)


class GetDeviceStatus(DeviceApiView):
    def get(self, *args):
        device_id = self.get_device_id_from_request()

        if not DeviceModel.objects.filter(id=device_id).exists():
            return self.device_with_id_does_not_exist(device_id)

        device = DeviceModel.objects.get(id=device_id).get_device()

        device_status = device.get_status()
        return Response({"status": device_status})


class GetDevices(DeviceApiView):
    def get(self, request, *args, **kwargs):
        return self.get_list_of_devices(request)
