angular.module('starter.controllers', [])

        .controller('StartseiteCtrl', function ($scope) {
            //alert("hallo");
        })

        .controller('RezepteCtrl', function ($scope, rezepte, $stateParams) {
            $scope.Rezepte = rezepte.all();
            //alert($stateParams.rezeptId);
            $scope.rezept = rezepte.get($stateParams.rezeptId);
           // alert($scope.rezept);
        })

        .controller('AddCtrl', function ($scope) {
            var x = $scope.add;
        });

        