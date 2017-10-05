from rest_framework import generics
from rest_framework import mixins
from rest_framework.reverse import reverse
from rest_framework.response import Response
from rest_framework import viewsets

from rooms.models import Room, Message
from rooms.serializer import RoomSerializer, MessageSerializer


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
            'rooms-list': reverse(RoomListView.name, request=request),
            'messages-list': reverse(MessageListView.name, request=request),
            })


class RoomListView(generics.ListCreateAPIView):
    name = 'room-list'
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class RoomDetailView(generics.RetrieveUpdateDestroyAPIView):
    name = 'room-detail'
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class MessageListView(viewsets.ViewSet,
                      generics.ListCreateAPIView):
    queryset = Message.objects.all()
    name = 'messages-list'
    serializer_class = MessageSerializer


class MessageDetailView(mixins.CreateModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        viewsets.GenericViewSet,
                        mixins.ListModelMixin):
    name = 'messages-detail'
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
