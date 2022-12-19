from django.core.cache.backends.base import DEFAULT_TIMEOUT
from rest_framework.decorators import api_view
from django.http.response import JsonResponse

from api.models import Category, SubCategory, Product
from api.serializers import CategorySerializer, SubCategorySerializer, ProductSerializer
from django.core.cache import cache
from django.conf import settings
from rest_framework.response import Response

import logging

CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)
logger = logging.getLogger('django')


@api_view(['GET'])
def show_cats(request):
    if cache.get('categories'):
        categories = cache.get('categories')
    else:
        categories = Category.objects.all()
        cache.set('categories', categories, timeout=CACHE_TTL)
    serializer = CategorySerializer(categories, many=True)
    logger.info('Categories sent')
    return Response(serializer.data)


@api_view(['GET'])
def show_products(request):
    if cache.get('product_list'):
        products = cache.get('product_list')
    else:
        products = Product.objects.all()
        cache.set('product_list', products, timeout=CACHE_TTL)
    serializer = ProductSerializer(products, many=True)
    logger.info('Products sent')
    return Response(serializer.data)


@api_view(['GET'])
def product_detail(request, prodId):
    if cache.get(f'product_{prodId}'):
        product = cache.get(prodId)
    else:
        try:
            product = Product.objects.get(id=prodId)
            cache.set(f'product_{prodId}', product, timeout=CACHE_TTL)
        except Product.DoesNotExist as e:
            return JsonResponse({'message': str(e)}, status=400)
    serializer = ProductSerializer(product)
    logger.info(f'Product {prodId} sent')
    return Response(serializer.data)


@api_view(['GET'])
def show_subcats(request, catId):
    if cache.get(f'sub_cat_{catId}'):
        sub_cats = cache.get(f'sub_cat_{catId}')
    else:
        sub_cats = SubCategory.objects.filter(cat=catId)
        cache.set(f'sub_cat_{catId}', sub_cats, timeout=CACHE_TTL)
    serializer = SubCategorySerializer(sub_cats, many=True)
    logger.info('Subcategories sent')
    return Response(serializer.data)
