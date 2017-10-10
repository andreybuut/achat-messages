from django.conf.urls import url, include
from rooms.views import RoomListView, RoomDetailView, MessageListView, MessageDetailViewSet, ApiRoot
from rest_framework.routers import SimpleRouter, DefaultRouter

# TODO: this for using mixins
route = DefaultRouter()
route.register(r'', ApiRoot, base_name='api-root')
#route.register(r'rooms', RoomListView, base_name='rooms')
route.register(r'room', RoomDetailView, base_name='room')
route.register(r'messages', MessageListView, base_name='messages')
route.register(r'message', MessageDetailViewSet, base_name='message')


urlpatterns = [
    url(r'^', include(route.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]
