from rest_framework.response import Response
# Create your views here.
from rest_framework.views import APIView


class AuthView(APIView):

    def get(self, request):
        return Response('Hello')
