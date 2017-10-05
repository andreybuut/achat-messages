from django.db import models
from django.utils.translation import ugettext_lazy as _
from model_utils.models import TimeStampedModel


class Room(TimeStampedModel):
    """
    Room model
    """
    name = models.CharField(
        verbose_name=_('Room name'),
        max_length=75,
        blank=True,
        null=False,
    )


class Message(TimeStampedModel):
    """
    Model for save messages
    """
    room = models.ForeignKey('Room', related_name='messages')
    text = models.CharField(
        max_length=75,
        blank=True,
        verbose_name=_('Text of the message')
    )
