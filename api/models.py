from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class SubCategory(models.Model):
    name = models.CharField(max_length=300)
    cat = models.ForeignKey(Category, on_delete=models.CASCADE)
    subId = models.IntegerField()

    class Meta:
        verbose_name = 'SubCategory'
        verbose_name_plural = 'SubCategories'

    def to_json(self):
        return {
            'id': self.id,
            'subId': self.subId,
            'name': self.name,
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    cat = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcat = models.IntegerField()
    image = models.TextField()
    description = models.TextField()
    rating = models.FloatField()
    price = models.FloatField()
    quantity = models.IntegerField()

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'cat': self.cat_id,
            'subcat': self.subcat,
            'image': self.image,
            'description': self.description,
            'rating': self.rating,
            'price': self.price,
            'quantity': self.quantity
        }


class User(AbstractUser):
    username = models.CharField(max_length=300, unique=True, null=True)
    password = models.CharField(max_length=300)
    status = models.BooleanField(null=True)
    image = models.ImageField(null=True, upload_to='imgs/', blank=True)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'password': self.password,
            'status': self.status,
            'image': self.image
        }


class Comment(models.Model):
    userName = models.CharField(max_length=300)
    productId = models.ForeignKey(Product, on_delete=models.CASCADE)
    comment = models.CharField(max_length=300)
    date = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'

    def to_json(self):
        return {
            'id': self.id,
            'userName': self.userName,
            'productId': self.productId,
            'comment': self.comment,
            'date': self.date
        }


class Order(models.Model):
    userId = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    productId = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    comment = models.CharField(max_length=300)
    createAt = models.CharField(max_length=300)
    status = models.CharField(max_length=64, default='created')
    shipping = models.CharField(max_length=64)
    preorder = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    def to_json(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'productId': self.productId,
            'comment': self.comment,
            'createAt': self.createAt,
            'shipping': self.shipping,
            'receiverId': self.receiverId,
            'preorder': self.preorder,
        }

