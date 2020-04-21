from django.shortcuts import render
from django.http import HttpResponse
from dh_app.models import TreeModel
from dh_app.forms import messageForm

# Create your views here.
def index(request):
    tree = TreeModel.objects.all()
    form = messageForm()

    if request.method == 'POST':
        form = messageForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            form = messageForm()
        else:
            print('ERROR')
    return render(request,'dh_app/index.html',context={'tree':tree,'form':form})

def tree(request,uuid):
    forest = TreeModel.objects.all()
    flag = False
    for tree in forest:
        if(tree.tree_class == uuid):
            tree_obj = tree

    return render(request,'dh_app/treeinfo.html',context = {'tree':tree_obj})
