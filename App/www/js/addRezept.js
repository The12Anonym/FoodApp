function addR ($scope)
{
    var e = document.getElementById("KatAuswahl");
    var KategorieIn = e.options[e.selectedIndex].value;
    var Gerichtlist = GetGerichte();
    var GerichtNew = new Gericht(Gerichtlist.length, $scope.NameIn, $scope.ZutatenIn, $scope.ZubereitungIn, $scope.BeschreibungIn, $scope.DauerIn, "-", KategorieIn);
    rezept.addRezept(GerichtNew);
}

