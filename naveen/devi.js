var devi = angular.module("devi",[])

devi.service("killer",function()
{
    this.gokul=function(x)
    {
        x=x*100;
        return x;
    }
})

devi.directive("deviRak",function(){
    return{
        template:"My name is gokul"
    }
})

devi.factory('userFactory', function() {
    var users = [
        { name: "John", age: 25 },
        { name: "Jane", age: 28 },
        { name: "Sam", age: 32 }
    ];
})

devi.controller("de",function($scope,$interval,$timeout,$http,$location,killer)
{
    $http.get("http://localhost:3000/movies").then(function(response){
        $scope.moo=response.data
    })

    $scope.addMovie=function()
    {
        var MovieData={
            name:$scope.newMovieName,
            boxoffice: $scope.newMovieBoxOffice
        } 
        $http.post("http://localhost:3000/add-movie",MovieData).then(function(response){
            console.log(response.data)

            $http.get("http://localhost:3000/movies".then(function(response){
                $scope.moo=response.data;
            }))
        })
        
    }

    $scope.data=function(y)
    {
        $scope.numbe=killer.gokul(y)
    }

    $scope.loc = $location.absUrl()
    $scope.Da = new Date().toLocaleTimeString()
    $interval(function()
    {
        $scope.Da = new Date().toLocaleTimeString();
    },1000)
    $scope.hel = "hello"
    $timeout(function()
    {
        $scope.hel = "Gokul"
    },2000)
    
    $scope.message=["devi","gokul","svb","vinoth"];
    $scope.mess=[
        {
            na:"Gokul",
            age:20,
            show:"true"
        },
        {
            na:"Devi",
            age:80,
            show:"true"
        },
        {
            na:"svb",
            age:21,
            show:"false"
        }
    ]
    $scope.remove=function(j)
    {
        var index = $scope.mess.indexOf(j)
        $scope.mess.splice(index,1)
    }

    $scope.submit=function()
    {
        $scope.mess.push({
            na:$scope.new.name,
            age:$scope.new.age
        })
        $scope.new.name=''
        $scope.new.age=''
    }

})