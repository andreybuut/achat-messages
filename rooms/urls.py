from django.conf.urls import url, include
from rest_framework import routers
from rooms.views import RoomView

router = routers.DefaultRouter()
router.register(RoomView)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]
