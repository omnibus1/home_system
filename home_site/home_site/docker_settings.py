from .settings import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_test',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': 'database',
        'PORT': '3306',
    }
}

CORS_ALLOW_ALL_ORIGINS = True