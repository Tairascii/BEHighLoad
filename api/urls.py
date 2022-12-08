

from django.urls import path, re_path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, TokenVerifyView,
)
from api.views import show_cats, show_subcats, show_products, product_detail
from api.views import CommentListAPIView, CommentDetailAPIView, OrderDetailAPIView, OrderGeneralAPIView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('categories/', show_cats),
    path('subcategories/<int:catId>', show_subcats),
    path('products/', show_products),
    path('products/<int:prodId>/comments/', CommentListAPIView.as_view()),
    path('products/<int:prodId>/comments/<int:pk>', CommentDetailAPIView.as_view()),
    path('products/<int:prodId>', product_detail),
    path('orders/', OrderGeneralAPIView.as_view()),
    path('orders/<int:user_id>', OrderGeneralAPIView.as_view()),
    path('orders/<int:order_id>/<int:user_id>', OrderDetailAPIView.as_view()),
]