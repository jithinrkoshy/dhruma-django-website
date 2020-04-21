from django import forms
from dh_app.models import Message

class messageForm(forms.ModelForm):

    class Meta():
        model = Message
        fields = '__all__'
        widgets = {
          'message': forms.Textarea(attrs={'class': 'textinputclass','rows': 5}),
          'name' : forms.TextInput(attrs  = {'class':'textinputclass'}),
          'email' : forms.TextInput(attrs  = {'class':'textinputclass'}),
          'phone' : forms.TextInput(attrs  = {'class':'textinputclass'}),
        }
