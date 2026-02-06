from rest_framework import routers
from goals.views import GoalViewSet


Goalsrouter = routers.DefaultRouter()
Goalsrouter.register(r"goals", GoalViewSet)
