from rest_framework import serializers

from .models import Hero


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
