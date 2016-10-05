angular.module('starter.services', [])

        .factory('rezepte', function () {
            // Might use a resource here that returns a JSON array

            var Lasagne = new Gericht('0', 'Lasagne', 'teig', 'lange', 'gut', 'ca 420 min','2.jpg', '2');
            var rezepte = GetGerichte();

            return {
                all: function () {
                    return rezepte;
                },
                remove: function (rezept) {
                    rezepte.splice(rezepte.indexOf(rezept), 1);
                },
                get: function (rezeptId) {
                    for (var i = 0; i < rezepte.length; i++) {
                        if (rezepte[i].id === parseInt(rezeptId)) {
                            return rezepte[i];
                        }
                    }
                    return null;
                }
            };
        });


