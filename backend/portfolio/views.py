from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Certification, Experience, Hero, Project, SiteSettings, Skill
from .serializers import CertificationSerializer, ExperienceSerializer, HeroSerializer, ProjectSerializer, SiteSettingsSerializer, SkillSerializer


class SiteSettingsAPIView(APIView):
    def get(self, request):
        settings = SiteSettings.objects.first()
        if not settings:
            return Response(
                {'detail': 'Site settings not configured yet.'},
                status=status.HTTP_404_NOT_FOUND,
            )
        serializer = SiteSettingsSerializer(settings, context={'request': request})
        return Response(serializer.data)


class ExperienceListView(ListAPIView):
    queryset = Experience.objects.filter(is_active=True)
    serializer_class = ExperienceSerializer
    pagination_class = None


class CertificationListView(ListAPIView):
    queryset = Certification.objects.filter(is_active=True)
    serializer_class = CertificationSerializer
    pagination_class = None


class FeaturedProjectsListView(ListAPIView):
    queryset = Project.objects.filter(is_active=True, featured=True)
    serializer_class = ProjectSerializer
    pagination_class = None


class SkillListView(ListAPIView):
    queryset = Skill.objects.filter(is_active=True)
    serializer_class = SkillSerializer
    pagination_class = None


class HeroAPIView(APIView):
    def get(self, request):
        hero = Hero.objects.first()
        if not hero:
            return Response(
                {'detail': 'Hero not found.'},
                status=status.HTTP_404_NOT_FOUND,
            )
        serializer = HeroSerializer(hero, context={'request': request})
        return Response(serializer.data)
