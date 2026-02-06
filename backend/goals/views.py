from rest_framework import viewsets
from goals.models import Goal
from goals.serializers import GoalSerializer


class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
