from django.db import models
from django.core.exceptions import ValidationError


class SiteSettings(models.Model):
    site_name = models.CharField(max_length=200, default='My Portfolio')
    logo = models.ImageField(upload_to='site/', blank=True, null=True)
    favicon = models.ImageField(upload_to='site/', blank=True, null=True)

    cta_title = models.CharField(max_length=300, default="Let's build something amazing together.")
    cta_button_text = models.CharField(max_length=100, default='GET IN TOUCH')

    resume = models.FileField(upload_to='site/', blank=True, null=True)

    primary_email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    location = models.CharField(max_length=200, blank=True)

    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    youtube_url = models.URLField(blank=True)

    footer_text = models.CharField(max_length=300, blank=True)
    copyright_text = models.CharField(max_length=200, default='All rights reserved.')

    seo_title = models.CharField(max_length=200, blank=True)
    seo_description = models.TextField(blank=True)
    seo_keywords = models.CharField(max_length=500, blank=True)
    og_image = models.ImageField(upload_to='site/', blank=True, null=True)

    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        if not self.pk and SiteSettings.objects.exists():
            from django.core.exceptions import ValidationError
            raise ValidationError('Only one SiteSettings record is allowed.')

    def save(self, *args, **kwargs):
        if not self.pk and SiteSettings.objects.exists():
            from django.core.exceptions import ValidationError
            raise ValidationError('Only one SiteSettings record is allowed.')
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'

    def __str__(self):
        return self.site_name


class Experience(models.Model):
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    currently_working = models.BooleanField(default=False)
    location = models.CharField(max_length=200, blank=True)
    company_logo = models.ImageField(upload_to='experience/', blank=True, null=True)
    display_order = models.PositiveIntegerField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('display_order',)

    def __str__(self):
        return f'{self.position} at {self.company}'


class Certification(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)
    issue_date = models.DateField(blank=True, null=True)
    credential_id = models.CharField(max_length=100, blank=True)
    credential_url = models.URLField(blank=True)
    certificate_image = models.ImageField(upload_to='certifications/', blank=True, null=True)
    display_order = models.PositiveIntegerField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('display_order',)

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    short_description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    technologies = models.JSONField(default=list)
    featured = models.BooleanField(default=False)
    display_order = models.PositiveIntegerField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('display_order',)

    def __str__(self):
        return self.title


class Skill(models.Model):
    name = models.CharField(max_length=100)
    icon_name = models.CharField(max_length=50)
    display_order = models.PositiveIntegerField()
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ('display_order',)

    def __str__(self):
        return self.name


class Hero(models.Model):
    greeting = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='hero/')
    resume = models.FileField(upload_to='resume/')
    github_url = models.URLField()
    linkedin_url = models.URLField()
    email = models.EmailField()
    twitter_url = models.URLField(blank=True)
    portfolio_status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        if not self.pk and Hero.objects.exists():
            raise ValidationError('Only one Hero record is allowed.')

    def save(self, *args, **kwargs):
        if not self.pk and Hero.objects.exists():
            raise ValidationError('Only one Hero record is allowed.')
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Hero'
        verbose_name_plural = 'Hero'
