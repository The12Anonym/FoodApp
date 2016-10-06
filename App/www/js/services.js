angular.module('starter.services', [])
        
        .factory('rezepte', function () {
            
            // Rezepte
            var Lasagne = new Gericht('0', 'Lasagne', '500 g Teug; 1kg zocker', 'teig einlegen; sauce draufschmieren; kochen', 'gut', 'ca 30 min','2.jpg', '0');
            var Pizza = new Gericht('1', 'Pizza','Teig; Tomaten; Salami; balsamico' , 'pizza belegen; sauce draufschmieren; 10 min im Backofen bei 200 grad backen', 'italienische Pizza', 'ca 30 min','3.jpg', '0');
            var Spaghetti = new Gericht('2', 'Spaghetti', 'Wasser; nudeln', 'wasser aufkochen; Nudeln ca. 15 min kochen lassen; nach Wunsch salzen etc.', 'spezielle Nudeln', 'ca 20 min','1.jpg', '0');
            var glace = new Gericht('3', 'Eis', ' 1l Milch; 50g Zucker', 'Milch aufkochen; Zocker in Milch giessen;  und fertig ist das eis', 'hausgemachte Eiscrème', 'ca 40 min','4.jpg', '1');
            var rezepte = GetGerichte();
            for (var i = 0; i < rezepte.length; i++)
            {
                 rezepte[i].zutaten = rezepte[i].zutaten.split(';');
                 rezepte[i].zubereitung = rezepte[i].zubereitung.split(';'); 
            }     
            
            function addRezept (rezeptNew)
            {
                rezepte.push(rezeptNew);
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


