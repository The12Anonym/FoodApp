angular.module('starter.services', [])

.factory('rezepte', function() {
  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var rezepte = [{
    id: 0,
    name: 'Spaghetti',
    dauer: 'ca. 30 min',
    img: 'img/1.jpg'
  }, {
    id: 1,
    name: 'Lasagne',
    dauer: 'ca. 40 min',
    img: 'img/2.jpg'
  }, {
    id: 2,
    name: 'Pizza',
    dauer: 'ca. 20 min',
    img: 'img/3.jpg'}];
    
    //return rezepte;
    
  return {
    all: function() {
      return rezepte;
    },
    remove: function(rezept) {
      rezepte.splice(rezepte.indexOf(rezept), 1);
    },
    get: function(rezeptId) {
      for (var i = 0; i < rezepte.length; i++) {
        if (rezepte[i].id === parseInt(rezeptId)) {
          return rezepte[i];
        }
      }
      return null;
    }    
  };
});


