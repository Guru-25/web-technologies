var app = angular.module('todoApp', []);

app.controller('TaskController', function($scope, $http) {
    // Load tasks from the server
    $scope.loadTasks = function() {
        $http.get('http://localhost:3000/api/tasks').then(function(response) {
            $scope.tasks = response.data;
        });
    };

    // Add a new task
    // Add a new task
$scope.addTask = function() {
    if ($scope.newTask && $scope.newDescription && $scope.newQuantity) {
        $http.post('http://localhost:3000/api/tasks', {
            task: $scope.newTask,
            description: $scope.newDescription,
            quantity: $scope.newQuantity
        }).then(function(response) {
            $scope.newTask = '';
            $scope.newDescription = '';
            $scope.newQuantity = '';
            $scope.loadTasks();
        });
    }
};


    // Complete a task
    $scope.completeTask = function(id) {
        $http.put('http://localhost:3000/api/tasks/' + id).then(function(response) {
            $scope.loadTasks();
        });
    };

    // Delete a task
    $scope.deleteTask = function(id) {
        $http.delete('http://localhost:3000/api/tasks/' + id).then(function(response) {
            $scope.loadTasks();
        });
    };

    // Initialize by loading tasks
    $scope.loadTasks();
});
