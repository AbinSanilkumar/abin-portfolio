from django.contrib import admin

from .models import Hero


@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'portfolio_status', 'updated_at')
    search_fields = ('name', 'title')
    list_filter = ('portfolio_status',)
    readonly_fields = ('created_at', 'updated_at')
