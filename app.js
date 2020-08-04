(function(){
    'use strict';

    angular.module('FirstAngular', [])
            .controller('Controller', function($scope){
                $scope.name = "Fatma";
                $scope.calc = function(){
                    return "Calculation";
                }
            });
})();