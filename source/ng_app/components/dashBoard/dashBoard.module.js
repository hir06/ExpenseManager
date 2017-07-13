(function() {
    "use strict";

    angular.module('ExpenseApp.dashBoard', [
            "ExpenseApp.dashBoard.controllers"
          
        ])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.when('/dashBoard', {
            controller: 'dashBoardController',
            controllerAs: 'dvm',
            templateUrl: 'ng_app/components/portfolios/dashBoard.html',
            //resolve: {}
        });
    }

})();