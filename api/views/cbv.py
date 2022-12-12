from rest_framework.views import APIView
from django.shortcuts import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from api.models import Comment, Order, Product
from api.serializers import CommentSerializer, OrderSerializer, ProductSerializer

from rest_framework.response import Response
from django.http.response import JsonResponse

import logging
logger = logging.getLogger('django')


class CommentListAPIView(APIView):
    def get_objects(self, prodId):
        try:
            return Comment.objects.filter(productId=prodId)
        except Comment.DoesNotExist as e:
            raise Http404

    def get(self, request, prodId=None):
        comments = self.get_objects(prodId)
        serializer = CommentSerializer(comments, many=True)
        logger.info(f'Comments for product {prodId} sent')
        return Response(serializer.data)

    def post(self, request, prodId=None):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info(f'Comment for product {prodId} created')
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        logger.error(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    permission_classes = (IsAuthenticated,)



class CommentDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Comment.objects.get(id=pk)
        except Comment.DoesNotExist as e:
            raise Http404

    def get(self, request, prodId=None, pk=None):
        comments = self.get_object(pk)
        serializer = CommentSerializer(comments)
        logger.info(f'Comment {pk} sent')
        return Response(serializer.data)

    def put(self, request, prodId=None, pk=None):
        comment = self.get_object(pk)
        serializer = CommentSerializer(instance=comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info(f'Comment {pk} updated')
            return Response(serializer.data)
        logger.error(serializer.errors)
        return Response(serializer.errors)

    def delete(self, request, prodId=None, pk=None):
        comment = self.get_object(pk)
        comment.delete()
        logger.info(f'Comment {pk} deleted')
        return Response({'message': 'deleted'}, status=204)


class OrderDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Order.objects.get(id=pk)
        except Order.DoesNotExist as e:
            raise Http404

    def get(self, request, order_id, user_id):
        order = self.get_object(order_id)
        if order.userId_id == user_id:
            serializer = OrderSerializer(order)
            logger.info(f'Order {order_id} of user {user_id} sent')
            return Response(serializer.data)
        logger.error(f'Order {order_id} forbidden for user {user_id}')
        return JsonResponse({'message': str(f'Forbidden')}, status=403)

    def put(self, request, order_id, user_id):
        order = self.get_object(order_id)
        serializer = OrderSerializer(instance=order, data=request.data)
        if order.userId_id != user_id:
            logger.error(f'Order {order_id} forbidden to update for user {user_id}')
            return JsonResponse({'message': str(f'Forbidden')}, status=403)
        if serializer.is_valid():
            serializer.save()
            logger.error(f'Order {order_id} of user {user_id} updated')
            return Response(serializer.data)
        logger.error(serializer.errors)
        return Response(serializer.errors)

    permission_classes = (IsAuthenticated,)


def buy_product(qty, prod_id):
    try:
        product = Product.objects.get(id=prod_id)
        prod_qty = product.quantity
        if prod_qty < qty:
            return False
        else:
            product.quantity = prod_qty - qty
    except Product.DoesNotExist as e:
        return False
    serializer = ProductSerializer(instance=product, data=product.to_json())
    if serializer.is_valid():
        serializer.save()
        return True
    else:
        return False


class OrderGeneralAPIView(APIView):
    def get_objects(self, user_id):
        try:
            return Order.objects.filter(userId=user_id)
        except Comment.DoesNotExist as e:
            raise Http404

    def get(self, request, user_id):
        orders = self.get_objects(user_id)
        serializer = OrderSerializer(orders, many=True)
        logger.info(f'Orders of user {user_id} sent')
        return Response(serializer.data)

    def post(self, request):
        qty = request.data['qty']
        prodId = request.data['productId']
        serializer = OrderSerializer(data=request.data)
        if not buy_product(qty, prodId):
            logger.error('Unavailable product quantity')
            return JsonResponse({'message': str(f'Unavailable product quantity')}, status=401)
        if serializer.is_valid():
            serializer.save()
            logger.info('Order created')
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    permission_classes = (IsAuthenticated,)


