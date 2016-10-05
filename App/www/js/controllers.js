angular.module('starter.controllers', [])

        .controller('StartseiteCtrl', function ($scope) {
            //alert("hallo");
        })

        .controller('RezepteCtrl', function ($scope, rezepte, $stateParams, storage) {
            
            $scope.Gerichte = storage.gerichte();
            $scope.Rezepte = rezepte.all();
            $scope.rezept = rezepte.get($stateParams.rezeptId);
            alert("test");
            alert(storage.gerichte);
        });