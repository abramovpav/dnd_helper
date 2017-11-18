from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm, UsernameField
from django import forms


class DnDAuthenticationForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(DnDAuthenticationForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['class'] = 'input-control'
        self.fields['password'].widget.attrs['class'] = 'input-control'

    next = forms.CharField(widget=forms.HiddenInput(), initial='/r')

    error_messages = {
        'invalid_login': (
            "Please enter a correct %(username)s and password."
        ),
        'inactive': ("This account is inactive."),
    }

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if username is not None and password:
            self.user_cache = authenticate(self.request, username=username.lower(), password=password)
            if self.user_cache is None:
                raise forms.ValidationError(
                    self.error_messages['invalid_login'],
                    code='invalid_login',
                    params={'username': self.username_field.verbose_name},
                )
            else:
                self.confirm_login_allowed(self.user_cache)

        return self.cleaned_data

    def confirm_login_allowed(self, user):
        super(DnDAuthenticationForm, self).confirm_login_allowed(user)

        # if user.account_type != TEACHER:
        #     raise forms.ValidationError(
        #         "Please enter a correct %(username)s and password and make sure it is teacher account"
        #     )
