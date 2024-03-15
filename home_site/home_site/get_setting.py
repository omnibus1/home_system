import os


def get_setting(setting, default):
    return os.environ.get(setting, default)
