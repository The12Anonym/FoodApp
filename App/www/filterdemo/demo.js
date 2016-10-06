var mod = angular.module("demo", []);

mod.controller("DemoController", function DemoController($scope) {
   $scope.query = {name: ""};
   $scope.sort = {predicate: "name", reverse: false};

   $scope.states = [
      {name: "Sarajevo", area: 35751.41},
      {name: "Zenica", area: 70550.19},
      {name: "Mostar", area: 891.75},
      {name: "Cazin", area: 29483.98},
      {name: "Prijedor", area: 419.24},
      {name: "Sanski Most", area: 755.30},
      {name: "Tuzla", area: 21114.76},
      {name: "Doboj", area: 23194.18},
      {name: "Banja Luka", area: 47613.60},
      {name: "Konjic", area: 34097.72},
      {name: "Jajce", area: 19854.13},
      {name: "Travnik", area: 2568.73},
      {name: "Visoko", area: 18419.83},
   ];

   $scope.doSomething = function (state) {

      alert("Izabrali ste '" + state.name + "'");

      // option #1: Changing some value
      //       state.name = "ABC";


      // option #2: Changing some value at a later time (doesn't work as expected!)
      /*
       window.setTimeout(function(){
       state.name = "AAA";
       }, 500);
       */


      // option #3: applying the delayed change
      /*window.setTimeout(function(){
       $scope.$apply(function(){
       state.name = "AAA";
       });
       }, 500);
       */
   }
});
