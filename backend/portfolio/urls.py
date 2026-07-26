from django.urls import path

from .views import CertificationListView, ExperienceListView, FeaturedProjectsListView, HeroAPIView, SiteSettingsAPIView, SkillListView

urlpatterns = [
    path('hero/', HeroAPIView.as_view()),
    path('skills/', SkillListView.as_view()),
    path('projects/', FeaturedProjectsListView.as_view()),
    path('certifications/', CertificationListView.as_view()),
    path('experience/', ExperienceListView.as_view()),
    path('site-settings/', SiteSettingsAPIView.as_view()),
]
