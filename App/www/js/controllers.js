

angular.module('starter.controllers', [])

        .controller('StartseiteCtrl', function ($scope) {
            //alert("hallo");
        })

        .controller('RezepteCtrl', function ($scope, rezepte, $stateParams) {
            $scope.Rezepte = rezepte.all();
            $scope.rezept = rezepte.get($stateParams.rezeptId);
            $scope.Kategorien = rezepte.getKat();
            $scope.Rezepte = rezepte.all(); // -- Rezepte Array
            $scope.rezept = rezepte.get($stateParams.rezeptId); // -- Rezept als Objekt
            $scope.Kategorien = rezepte.getKat(); // -- Kategorie Array
            $scope.query = {name: ""}; // -- Filterfunktion
            $scope.sort = {predicate: "name", reverse: false}; // -- Filterfunktion
        })



        .controller('AddCtrl', function ($scope) {
            $scope.add = function () {
                addR($scope);

            };
        })

        .controller('dragCtrl', function ($scope,rezepte, $stateParams) {
            $scope.func = function(id)
    {
        DeleteGericht(id);
    };
            
        })


        .controller("FilterCtrl", function FilterCtrl($scope) {
            $scope.query = {name: ""};
            $scope.sort = {predicate: "name", reverse: false};
        })

        .controller("ExampleController", function ($scope, $cordovaCamera) {

            $scope.takePicture = function () {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: true
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    alert("done coding");
                    SetImgDATAuri($scope.imgURI);
                    alert($scope.imgURI);
                }, function (err) {
                    alert(err);
                });
            };

        });



        