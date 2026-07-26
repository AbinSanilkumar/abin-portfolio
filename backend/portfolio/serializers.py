from rest_framework import serializers

from .models import Certification, Experience, Hero, Project, SiteSettings, Skill


class SiteSettingsSerializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField()
    favicon = serializers.SerializerMethodField()
    resume = serializers.SerializerMethodField()
    og_image = serializers.SerializerMethodField()

    class Meta:
        model = SiteSettings
        fields = '__all__'

    def get_logo(self, obj):
        if obj.logo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.logo.url) if request else obj.logo.url
        return None

    def get_favicon(self, obj):
        if obj.favicon:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.favicon.url) if request else obj.favicon.url
        return None

    def get_resume(self, obj):
        if obj.resume:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.resume.url) if request else obj.resume.url
        return None

    def get_og_image(self, obj):
        if obj.og_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.og_image.url) if request else obj.og_image.url
        return None


class ExperienceSerializer(serializers.ModelSerializer):
    company_logo = serializers.SerializerMethodField()

    class Meta:
        model = Experience
        fields = '__all__'

    def get_company_logo(self, obj):
        if obj.company_logo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.company_logo.url) if request else obj.company_logo.url
        return None


class CertificationSerializer(serializers.ModelSerializer):
    certificate_image = serializers.SerializerMethodField()

    class Meta:
        model = Certification
        fields = '__all__'

    def get_certificate_image(self, obj):
        if obj.certificate_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.certificate_image.url) if request else obj.certificate_image.url
        return None


class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return None


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class HeroSerializer(serializers.ModelSerializer):
    profile_image = serializers.SerializerMethodField()
    resume = serializers.SerializerMethodField()

    class Meta:
        model = Hero
        fields = '__all__'

    def get_profile_image(self, obj):
        if obj.profile_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.profile_image.url) if request else obj.profile_image.url
        return None

    def get_resume(self, obj):
        if obj.resume:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.resume.url) if request else obj.resume.url
        return None
