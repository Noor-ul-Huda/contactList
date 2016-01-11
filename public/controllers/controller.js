angular.module('starter',[])
.controller('AppCtrl', function($scope, $http){
    console.log('hello world from controller.js');

    var refresh = function() {
        $http.get('/contactlist').success(function (response) {
            console.log('i got the data i requested');
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };
    refresh();
    $scope.addContact = function(){
      console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(res){
            console.log(res);
            refresh();
        })

    };
})