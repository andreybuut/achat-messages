from django.conf.urls import url, include
from rooms.views import RoomListView, ApiRoot, RoomDetailView, MessageListView, MessageDetailView
from rest_framework.routers import DefaultRouter

# TODO: this for using mixins
route = DefaultRouter()
route.register(r'messages', MessageListView, base_name='messages')
route.register(r'message', MessageDetailView, base_name='message')

urlpatterns = [
    # TODO: Testing generics for using
    url(r'^$', ApiRoot.as_view(), name=ApiRoot.name),
    url(r'^rooms/$', RoomListView.as_view(), name=RoomListView.name),
    url(
        r'^rooms/(?P<pk>[0-9]+)$',
        RoomDetailView.as_view(),
        name=RoomDetailView.name
        ),
    # TODO: Testing mixins
    url(r'^', include(route.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]
