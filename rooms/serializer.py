from rest_framework import serializers
from rooms.models import Room, Message


class RoomSerializer(serializers.HyperlinkedModelSerializer):
    messages = serializers.HyperlinkedRelatedField(
        view_name='rooms-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Room
        fields = (
            'url',
            'name',
            'created',
            'messages'
         )


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = (
            'room',
            'text',
            'created',
            'url'
        )