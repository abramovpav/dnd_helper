from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import AdminPasswordChangeForm

from core.models import User


class CoreUserAdmin(UserAdmin):
    change_password_form = AdminPasswordChangeForm
    change_user_password_template = None

    search_fields = ('email', )
    date_hierarchy = 'date_joined'
    readonly_fields = ('date_joined',)
    list_display = ('email', 'first_name', 'last_name', 'is_active', 'is_staff', 'date_joined')
    list_display_links = ('email', )

    fieldsets = (
        (None, {
            'fields': ('password', ('email', 'first_name', 'last_name'), 'date_joined'),
        }),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups')
        }),
    )
    ordering = None

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups')
        })
    )
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')


admin.site.register(User, CoreUserAdmin)
