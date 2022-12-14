import json

from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from api.models import User
from api.serializers import UserSerializer
from django.contrib.auth.hashers import make_password

import logging
logger = logging.getLogger('django')


class UserViewSet(viewsets.ViewSet):
    def create(self, request):
        data = json.loads(request.body)
        data['password'] = make_password(data['password'])
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            logger.info(f'{data.username} created')
            return Response(serializer.data)
        logger.error(serializer.errors)
        return Response(serializer.errors, status=200)

    def partial_update(self, request, pk):
        user = User.objects.get(id=pk)
        data = json.loads(request.body)
        data['password'] = make_password(data['password'])
        serializer = UserSerializer(instance=user, data=data)
        if serializer.is_valid():
            serializer.save()
            logger.info(f'User {pk} updated')
            return Response(serializer.data)
        logger.error(serializer.errors)
        return Response(serializer.errors)


class ManageUserViewSet(viewsets.ViewSet):
    def get_queryset(self):
        return User.objects.all()

    def list(self, request):
        serializer = UserSerializer(self.get_queryset(), many=True)
        logger.info('Users sent')
        return Response(serializer.data)

    def destroy(self, request, pk):
        user = User.objects.get(id=pk)
        user.delete()
        logger.info(f'User {pk} deleted')
        return Response({'message': 'deleted'}, status=204)

    permission_classes = (IsAdminUser,)