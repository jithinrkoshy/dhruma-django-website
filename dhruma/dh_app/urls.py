from django.conf.urls import url
from dh_app import views

app_name = 'dh_app'

urlpatterns = [

  url(r'^(?P<uuid>[a-z]*)/',views.tree,name = 'tree'),

]
