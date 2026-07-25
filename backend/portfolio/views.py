from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Hero
from .serializers import HeroSerializer


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
