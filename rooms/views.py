from rest_framework import generics
from rooms.models import Room
from rooms.serializer import RoomSerializer


class RoomView(generics.GenericAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
