from django.contrib import admin
from django.utils.html import format_html

from .models import Certification, Experience, Hero, Project, SiteSettings, Skill


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'featured', 'display_order', 'is_active', 'image_tag')
    list_editable = ('featured', 'display_order', 'is_active')
    search_fields = ('title', 'short_description')
    list_filter = ('featured', 'is_active')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_at', 'updated_at', 'image_tag')

    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" height="48" />', obj.image.url)
        return '-'

    image_tag.short_description = 'Image'


@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'portfolio_status', 'updated_at')
    search_fields = ('name', 'title')
    list_filter = ('portfolio_status',)
    readonly_fields = ('created_at', 'updated_at')


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = (
        ('General', {
            'fields': ('site_name', 'logo', 'logo_preview', 'favicon', 'favicon_preview'),
        }),
        ('Branding', {
            'fields': ('cta_title', 'cta_button_text'),
        }),
        ('Resume', {
            'fields': ('resume',),
        }),
        ('Contact', {
            'fields': ('primary_email', 'phone', 'location'),
        }),
        ('Social Links', {
            'fields': ('github_url', 'linkedin_url', 'twitter_url', 'instagram_url', 'youtube_url'),
        }),
        ('Footer', {
            'fields': ('footer_text', 'copyright_text'),
        }),
        ('SEO', {
            'fields': ('seo_title', 'seo_description', 'seo_keywords', 'og_image', 'og_image_preview'),
        }),
        ('System', {
            'fields': ('updated_at',),
        }),
    )
    readonly_fields = ('updated_at', 'logo_preview', 'favicon_preview', 'og_image_preview')

    def logo_preview(self, obj):
        if obj.logo:
            return format_html('<img src="{}" height="48" />', obj.logo.url)
        return '-'

    def favicon_preview(self, obj):
        if obj.favicon:
            return format_html('<img src="{}" height="32" />', obj.favicon.url)
        return '-'

    def og_image_preview(self, obj):
        if obj.og_image:
            return format_html('<img src="{}" height="48" />', obj.og_image.url)
        return '-'

    def has_add_permission(self, request):
        if SiteSettings.objects.exists():
            return False
        return True


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('position', 'company', 'start_date', 'end_date', 'currently_working', 'display_order', 'is_active')
    list_editable = ('display_order', 'is_active')
    search_fields = ('position', 'company', 'description')
    list_filter = ('currently_working', 'is_active')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ('title', 'issuer', 'issue_date', 'display_order', 'is_active')
    list_editable = ('display_order', 'is_active')
    search_fields = ('title', 'issuer')
    list_filter = ('is_active',)
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon_name', 'display_order', 'is_active')
    list_editable = ('display_order', 'is_active')
    list_filter = ('is_active',)
