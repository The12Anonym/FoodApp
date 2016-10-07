angular.module('starter.services', [])

        .factory('rezepte', function () {
            
            // Falls es noch keine Kategorien im LocalStorage gibt werden sie generiert
            if (localStorage.getItem('Kategorie1ID') == null)
            {
                var k1 = new Kategorie('1', 'Salat');
                var k2 = new Kategorie('2', 'Vorspeise');
                var k3 = new Kategorie('3', 'Vegetarisch');
                var k4 = new Kategorie('4', 'Fleischgericht');
                var k5 = new Kategorie('5', 'Fischgericht');
                var k6 = new Kategorie('6', 'Kuchen');
                var k7 = new Kategorie('7', 'Desserts');
            }

            var rezepte = GetGerichte();
            // Auflistungsfunktion für alte Rezepte - alt = schon im LocalStorage
            for (var i = 0; i < rezepte.length; i++)
            {
                // Ausfteilung der einzelnen Zutaten / Zubereitungsschritte
                rezepte[i].zutaten = rezepte[i].zutaten.split(',');
                rezepte[i].zubereitung = rezepte[i].zubereitung.split('.');
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
                            alert("test");
                        }
                    }
                    return null;
                }
            };
        });


