var app=angular.module("eventApp",[]);
app.controller ("eventController",function ($scope,$http){
    $scope.event={};
    $scope.events=[];
    $scope.getEvents= function(){
        $http.get("/events").then(function (response){
            $scope.events=response.data;
        },function(error){
            console.log(error);
        });
    };
    $scope.addEvent=function(){
        if ($scope.event._id){
            $http.put("/events/"+$scope.event_id,$scope.event).then (function(response){
                $scope.getEvents();
                $scope.event={};
            },function(error){
                console.log(error);
            });
        }
        else{
            $http.post("/events",$scope.event).then (function(response){
                $scope.getEvents();
                $scope.event={};
            },function(error){
                console.log(error);
            }); 
        }
    };
    $scope.editEvent=function(event){
        $scope.event=angular.copy(event);
    };
    $scope.deleteEvent=function(id){
        $http.delete("/events/"+id).then (function(response){
            $scope.getEvents();
        },function(error){
            console.log(error);
        });
    };
    $scope.getEvents();

});