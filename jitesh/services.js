// services.js
angular.module('goalApp')
    .factory('GoalService', function ($http) {
        const baseUrl = 'http://localhost:5000/restapi/goals';

        return {
            getGoals: function () {
                return $http.get(baseUrl).then(response => response.data);
            },
            addGoal: function (goalText) {
                return $http.post(baseUrl, { text: goalText }).then(response => response.data);
            },
            deleteGoal: function (id) {
                return $http.delete(`${baseUrl}/${id}`).then(response => response.data);
            }
        };
    });
