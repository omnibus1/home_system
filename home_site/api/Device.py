import multiprocessing
import tinytuya


class Device:
    def __init__(self, device_id, device_key, device_ip):
        self.device_id = device_id
        self.device_key = device_key
        self.device_ip = device_ip
        self.device = self.create_device()

    def create_device(self):
        """used to initialize the connection with the device, runs even if the device has no internet connection"""
        device = tinytuya.OutletDevice(self.device_id, self.device_ip, self.device_key)
        device.set_version(3.3)
        return device

    def turn_on(self):
        """turns the device on"""
        self.device.turn_on()

    def turn_off(self):
        """turns the device off"""
        self.device.turn_off()

    def get_status(self):
        """returns the status, uses a multiprocess to handle a not connected device, if the time to respond is larger
            than a second, the device is considered to be offline"""
        p = multiprocessing.Process(target=self.request_for_status)
        p.start()
        p.join(timeout=1)
        if p.is_alive():
            p.terminate()
            return "offline"

        return self.request_for_status()

    def request_for_status(self):
        """sends a request to the device for a status, if the device is offline it will execute for a long time"""
        return "on" if self.device.status()["dps"]["1"] else "off"
