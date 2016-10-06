function addR ($scope)
{
    var e = document.getElementById("KatAuswahl");
    var KategorieIn = e.options[e.selectedIndex].value;
    var Gerichtlist = GetGerichte();
    var GerichtNew = new Gericht(Gerichtlist.length, $scope.NameIn, $scope.ZutatenIn, $scope.ZubereitungIn, $scope.BeschreibungIn, $scope.DauerIn, ImgDATAuri, KategorieIn);
    rezept.addRezept(GerichtNew);
}

var ImgDATAuri = "";

function SetImgDATAuri (DATAuri)
{
    ImgDATAuri = DATAuri;
    alert(ImgDATAuri);
}