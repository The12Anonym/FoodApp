angular.module('starter.controllers', [])

        .controller('StartseiteCtrl', function ($scope) {
            //alert("hallo");
        })

        .controller('RezepteCtrl', function ($scope, rezepte, $stateParams) {
            $scope.Rezepte = rezepte.all(); // -- Rezepte Array
            $scope.rezept = rezepte.get($stateParams.rezeptId); // -- Rezept als Objekt
            $scope.Kategorien = rezepte.getKat(); // -- Kategorie Array
            $scope.query = {name: ""}; // -- Filterfunktion
            $scope.sort = {predicate: "name", reverse: false}; // -- Filterfunktion
        })

        .controller('AddCtrl', function ($scope) {

        })

        .controller("FilterCtrl", function FilterCtrl($scope) {
            $scope.query = {name: ""};
            $scope.sort = {predicate: "name", reverse: false};            
        });

        