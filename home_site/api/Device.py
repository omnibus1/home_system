import multiprocessing
import tinytuya


class Device:
    timeout_time = 2
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
        self.perform_task_with_timeout(self.device.turn_on, self.timeout_time)

    def turn_off(self):
        """turns the device off"""
        self.perform_task_with_timeout(self.device.turn_off, self.timeout_time)

    def get_status(self):
        """returns the status of the device"""
        task_successful = self.perform_task_with_timeout(self.request_for_status, self.timeout_time)

        if not task_successful:
            return "offline"
        return self.request_for_status()

    def request_for_status(self):
        """sends a request to the device for a status, if the device is offline it will execute for a long time"""
        return "on" if self.device.status()["dps"]["1"] else "off"

    def perform_task_with_timeout(self, task_function, timeout):
        """Performs a task with a given timeout, returns a bool indicating if the task succeeded in time"""
        p = multiprocessing.Process(target=task_function)
        p.start()
        p.join(timeout)
        if p.is_alive():
            p.terminate()
            return False
        return True
