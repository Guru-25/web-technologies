// 1. Module definition
var app = angular.module("myApp", []);

// 2. Controller with Dependency Injection
app.controller("FormController", function ($scope, DataService) {
  $scope.formData = {};
  $scope.retrievedData = [];
  $scope.searchQuery = ""; // Model for search box

  $scope.submitData = function () {
    DataService.saveData($scope.formData).then(function () {
      alert("Data saved!");
      $scope.formData = {};
      $scope.retrieveData(); // Refresh data after saving
    });
  };

  $scope.retrieveData = function () {
    DataService.getData().then(function (response) {
      $scope.retrievedData = response.data;
    });
  };

  $scope.deleteData = function (item) {
    DataService.deleteData(item._id || item.id).then(function () {
      alert("Data deleted!");
      $scope.retrieveData(); // Refresh data after deletion
    });
  };
});

app.factory("DataService", function ($http) {
  return {
    saveData: function (data) {
      return $http.post("http://localhost:3000/api/save", data);
    },
    getData: function () {
      return $http.get("http://localhost:3000/api/retrieve");
    },
    deleteData: function (id) {
      return $http.delete(`http://localhost:3000/api/delete/${id}`);
    },
  };
});

