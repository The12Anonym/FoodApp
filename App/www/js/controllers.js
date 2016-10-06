angular.module('starter.controllers', [])

        .controller('StartseiteCtrl', function ($scope) {
            //alert("hallo");
        })

        .controller('RezepteCtrl', function ($scope, rezepte, $stateParams) {


            $scope.Rezepte = rezepte.all();
            $scope.rezept = rezepte.get($stateParams.rezeptId);
            $scope.Kategorien = rezepte.getKat();
        })

        .controller('AddCtrl', function ($scope) {

        })

        .controller('SearchCtrl', function ($scope) {
            $scope.search = function () {
            Search($scope);
        };
        });

        