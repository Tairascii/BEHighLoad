

from django.urls import path, re_path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, TokenVerifyView,
)
from api.views import show_cats, show_subcats, show_products, show_users, user_detail
from api.views import CommentListAPIView, CommentDetailAPIView, product_detail

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
]