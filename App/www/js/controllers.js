

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


        .controller("FilterCtrl", function FilterCtrl($scope) {
            $scope.query = {name: ""};
            $scope.sort = {predicate: "name", reverse: false};
        })

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

        })
        .controller('ImagePickerController', function ($scope, $cordovaImagePicker) {
            $scope.getImageSaveContact = function () {
                // Image picker will load images according to these settings
                var options = {
                    maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
                    width: 800,
                    height: 800,
                    quality: 95,
                    encodingType: Camera.EncodingType.JPEG// Higher is better
                };

                $cordovaImagePicker.getPictures(options).then(function (results) {
                    // Loop through acquired images
                        var imageData=$base64.encode(results);
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                        SetImgDATAuri($scope.imgURI);
                        alert($scope.imgURI);// Print image URI
                    
                }, function (error) {
                    alert (error);  // In case of error
                });
            };

        });



        