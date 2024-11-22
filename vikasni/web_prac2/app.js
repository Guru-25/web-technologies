var app=angular.module("eventApp",[]);
app.controller("eventController",function($scope,$http){
    $scope.event={};
    $scope.events=[];
    $scope.getEvents=function(){
        $http.get("/events").then(function(response){
            $scope.events=response.data;
        }, function(err){ console.log(err)});
    };
    $scope.addEvent=function(){
if ($scope.event._id){
    $http.put("/events/"+$scope.event._id,$scope.event).then(function(response){
        $scope.getEvents();
        $scope.event={};
    },function(err){console.log(err)});
}
else{
    $http.post("/events",$scope.event).then(function(response){
        $scope.getEvents();
        $scope.event={};
    },function(err){console.log(err)}); 
}
    };
    $scope.edit=function(event){
$scope.event=angular.copy(event);
    };
    $scope.DeleteEvent=function(id){
        $http.delete("/events/"+id).then(function(response){
            $scope.getEvents();
        },function(err){console.log(err)});
    };
    $scope.getEvents();

});