(function(){
    'use strict';

    angular.module('FirstAngular', [])
            .controller('Controller', function($scope , $filter){
                // $scope.name = "Fatma";
                // $scope.calc = function(){
                //     return "Calculation";
                // }
                $scope.name ="";
                $scope.totalValue = 0;

                $scope.display = function(){
                    $scope.totalValue = Calculate($scope.name);
                }
                $scope.upper = function(){
                    var upCase = $filter('uppercase');
                    $scope.name = upCase($scope.name);
                }
            });
    function Calculate(string){
        var stringValue =0;
        for( var i = 0; i<string.length; i++){
            stringValue += string.charCodeAt(i)
        }
        return stringValue;
    }
})();