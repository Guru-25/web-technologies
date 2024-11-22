// app.js
angular.module('goalApp', [])
    .controller('GoalController', function ($scope, GoalService) {
        $scope.goals = [];
        $scope.newGoalText = '';

        // Fetch all goals
        GoalService.getGoals().then(function (data) {
            $scope.goals = data;
        });

        // Add new goal
        $scope.addGoal = function () {
            if ($scope.newGoalText) {
                GoalService.addGoal($scope.newGoalText).then(function (newGoal) {
                    $scope.goals.push(newGoal);
                    $scope.newGoalText = '';  // Clear the input
                });
            }
        };

        // Delete goal
        $scope.deleteGoal = function (id) {
            GoalService.deleteGoal(id).then(function () {
                $scope.goals = $scope.goals.filter(goal => goal._id !== id);
            });
        };
    });
