from django.contrib import admin
from .models import *


@admin.register(DeviceModel)
class OutletAdmin(admin.ModelAdmin):
    list_display = [field.name for field in DeviceModel._meta.fields]
