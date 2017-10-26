from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import HStoreField

# Solution to avoid unique_together for email
AbstractUser._meta.get_field('email')._unique = True


# __all__ = ['AppUser']


class AppUser(AbstractUser):
    """Custom user model.
    """
    avatar = models.URLField()
    notifications = HStoreField(null=True)

    USERNAME_FIELD = 'email'

    REQUIRED_FIELD = ['username']

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
