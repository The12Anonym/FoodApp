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
<<<<<<< HEAD
            var x = $scope.add;
=======

        })

        .controller('SearchCtrl', function ($scope) {
            $scope.search = function () {
            Search($scope);
        };
>>>>>>> f02d235b708fbc0406a9e3c2d9bbad59d8820f12
        });

        