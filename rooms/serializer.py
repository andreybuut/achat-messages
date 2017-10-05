from rest_framework import serializers


class RoomSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        fields = (
            'url',
            'name',
            'created'
        )