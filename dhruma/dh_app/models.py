from django.db import models

# Create your models here.
class TreeModel(models.Model):
    tree_class = models.CharField(max_length = 264)
    tree_name = models.CharField(max_length = 264)
    tree_pic = models.ImageField(upload_to='tree', blank = True)
    slide1 = models.ImageField(upload_to='tree', blank = True)
    slide2 = models.ImageField(upload_to='tree', blank = True)
    slide3 = models.ImageField(upload_to='tree', blank = True)
    tree_info_p1 = models.TextField(blank = True)
    tree_info_p2 = models.TextField(blank = True)
    tree_info_p3 = models.TextField(blank = True)

    def __str__(self):
        return self.tree_name

class Message(models.Model):
    name = models.CharField(max_length = 264)
    phone = models.CharField(max_length = 264)
    email = models.EmailField()
    message = models.TextField(max_length = 264)

    def __str__(self):
        return self.name
