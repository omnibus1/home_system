from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import *


class DeviceApiView(APIView):
    def get_device_id_from_request(self):
        return self.request.query_params.get("id", "-1")

    def device_with_id_does_not_exist(self, device_id):
        return Response({"error": f"Device with id {device_id} does not exist"}, HTTP_400_BAD_REQUEST)
