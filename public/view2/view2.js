'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        })
    }])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {

        $scope.findField = function($http){

            alert("findField called");

            var config = {
                method: 'GET',
                url: "https://hackillinois.climate.com/api/fields?includeBoundary=true",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                'withCredentials': 'true'
            };

            $http(config)
                .success(function (data, status, headers, config) {
                    alert("data");        //deserialize the string
                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                        "<hr />status: " + status +
                        "<hr />headers: " + header +
                        "<hr />config: " + config;
                });
        };
}]);