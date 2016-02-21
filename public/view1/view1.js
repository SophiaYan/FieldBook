'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        })
    }])

.controller('View1Ctrl', [function() {

        var view1Model = this;
 
        var code = "";

        var uri = "http://172.17.106.123:3000/#/view2";
        view1Model.login = function($scope, $http) {

            var clientId = "dpm2hr4rsupkkl";
            var clientSecret = "8d15lmkl0r2o8fnl7qd74l4oms";

            var redirect_url = "https://climate.com/static/app-login/index.html?scope=openid+user"
                + "&page=oidcauthn"
                + "&mobile=true"
                + "&response_type=code"
                + "&redirect_uri=" + encodeURIComponent(uri)
                + "&client_id=" + clientId;

            window.location.href = redirect_url;

        };

    }]);