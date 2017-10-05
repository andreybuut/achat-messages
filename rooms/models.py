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
        null=False
    )

