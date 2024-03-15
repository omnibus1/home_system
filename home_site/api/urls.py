from django.urls import path
from .views import *

urlpatterns = [
    path("turn_on/", TurnDeviceOn.as_view(), name="turn_on"),
    path("turn_off/", TurnDeviceOff.as_view(), name="turn_off"),
    path("status/", GetDeviceStatus.as_view(), name="status"),
    path("devices/", GetDevices.as_view(), name="devices"),
    path("images/", GetImages.as_view(), name="images")
]
