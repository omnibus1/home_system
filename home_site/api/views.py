from rest_framework.response import Response
from .models import *
from .utils import  DeviceApiView


class TurnDeviceOn(DeviceApiView):
    def get(self, *args):
        device_id = self.get_device_id_from_request()
        if not DeviceModel.objects.filter(id=device_id).exists():
            return self.device_with_id_does_not_exist(device_id)

        device = DeviceModel.objects.get(id=device_id).get_device()

        device.turn_on()
        return Response({"status": device_id})


class TurnDeviceOff(DeviceApiView):
    def get(self, *args):
        device_id = self.get_device_id_from_request()
        if not DeviceModel.objects.filter(id=device_id).exists():
            return self.device_with_id_does_not_exist(device_id)

        device = DeviceModel.objects.get(id=device_id).get_device()

        device.turn_off()
        return Response({"status": device_id})


class GetDeviceStatus(DeviceApiView):
    def get(self, *args):
        device_id = self.get_device_id_from_request()

        if not DeviceModel.objects.filter(id=device_id).exists():
            return self.device_with_id_does_not_exist(device_id)

        device = DeviceModel.objects.get(id=device_id).get_device()

        device_status = device.get_status()
        return Response({"status": device_status})
