from django.db import models
from django.core.exceptions import ValidationError


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
