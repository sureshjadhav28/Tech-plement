from .models import Quote
from .serializers import QuoteSerializer
from rest_framework.generics import ListAPIView

# Create your views here.

class Quotelist(ListAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer