(function() {
    'use strict';
    var ExpenseApp = angular.module("ExpenseApp", [
        'ngRoute',
        'ExpenseApp.dashBoard'
    ])


    ExpenseApp.config(['$routeProvider', '$compileProvider', '$locationProvider',
        function($routeProvider, $compileProvider, $locationProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/dashBoard'
                });
        }
    ]);

    ExpenseApp.run(function($rootScope, $window) {
        console.log("App started successfully!");
    });

})();