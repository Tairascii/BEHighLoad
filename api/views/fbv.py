from rest_framework.decorators import api_view
from django.http.response import JsonResponse

from api.models import Category, SubCategory, Product
from api.serializers import CategorySerializer, SubCategorySerializer, ProductSerializer

from rest_framework.response import Response

import logging
logger = logging.getLogger('django')


@api_view(['GET'])
def show_cats(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    logger.info('Categories sent')
    return Response(serializer.data)


@api_view(['GET'])
def show_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    logger.info('Products sent')
    return Response(serializer.data)


@api_view(['GET'])
def product_detail(request, prodId):
    try:
        product = Product.objects.get(id=prodId)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    serializer = ProductSerializer(product)
    logger.info(f'Product {prodId} sent')
    return Response(serializer.data)


@api_view(['GET'])
def show_subcats(request, catId):
    subcats = SubCategory.objects.filter(cat=catId)
    serializer = SubCategorySerializer(subcats, many=True)
    logger.info('Subcategories sent')
    return Response(serializer.data)
