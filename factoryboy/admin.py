from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from django.utils.translation import ugettext_lazy as _

from .models import AppUser


@admin.register(AppUser)
class AppUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email',
                                         '_avatar')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        (_('Notifications'), {'fields': ('notifications', )})
    )
    readonly_fields = UserAdmin.readonly_fields + \
        ('_avatar', 'notifications')

    def _avatar(self, user):
        if user.avatar:
            return format_html(mark_safe(
                "<img src='{}' >".format(user.avatar.url)))
        else:
            return "None"
    _avatar.short_description = "Avatar"

# Register your models here.
