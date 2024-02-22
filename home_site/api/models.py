from django.db import models
from .Device import Device


class DeviceModel(models.Model):
    device_ip = models.CharField(max_length=255)
    device_id = models.CharField(max_length=255)
    device_key = models.CharField(max_length=255)

    def get_device(self):
        return Device(self.device_id, self.device_key, self.device_ip)

    class Meta:
        verbose_name = "Device"
        verbose_name_plural = "Devices"

    def __str__(self):
        return "Outlet" + str(self.id)
