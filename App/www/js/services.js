angular.module('starter.services', [])
        
        .factory('rezepte', function () {
            var k1 = new Kategorie('1','döner');
    var k2 = new Kategorie('2','kalt');
    var k3 = new Kategorie('3','desert');
            
            
            // Rezepte
            var rezepte = GetGerichte();
            for (var i = 0; i < rezepte.length; i++)
            {
                 rezepte[i].zutaten = rezepte[i].zutaten.split(".");
                 rezepte[i].zubereitung = rezepte[i].zubereitung.split("."); 
            }     
            
            function addRezept (rezeptNew)
            {
                rezepte.push(rezeptNew);
            }
            function removeRezept(id)
            {
                rezepte.splice(id, 1);
            }
            
            return {
                all: function () {
                    return rezepte;
                },
                getKat: function () {
                    return GetKategorien();
                },
                get: function (rezeptId) {
                    for (var i = 0; i < rezepte.length; i++) {                        
                        if (rezepte[i].id == parseInt(rezeptId)) {                            
                            return rezepte[i];
                        }
                    }
                    return null;
                }
            };
        });


