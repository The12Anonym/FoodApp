

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
            console.log($scope.rezept);
            console.log("test");
        })

        .controller('AddCtrl', function ($scope) {
            $scope.add = function () {
                addR($scope);

            };
        })
        
        // Gesten Controller
        .controller('dragCtrl', function ($scope, rezepte, $stateParams) {
            $scope.func = function (id)
            {
                DeleteGericht(id);
            };

        })

        // Filter Controller
        .controller("FilterCtrl", function FilterCtrl($scope) {
            $scope.query = {name: ""};
            $scope.sort = {predicate: "name", reverse: false};
        })

        // Kamera Controller
        .controller("ExampleController", function ($scope, $cordovaCamera) {

            $scope.takePicture = function () {
                var options = {
                    quality: 95,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 800,
                    targetHeight: 800,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: true
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    SetImgDATAuri($scope.imgURI);
                }, function (err) {
                    alert(err);
                });
            };

        });



        