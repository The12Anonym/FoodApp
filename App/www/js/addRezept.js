function addR($scope)
{
    var e = document.getElementById("KatAuswahl");
    var KategorieIn = e.options[e.selectedIndex].value;
    var Gerichtlist = GetGerichte();
    var GerichtNew = new Gericht(Gerichtlist.length, $scope.NameIn, $scope.ZutatenIn, $scope.ZubereitungIn, $scope.BeschreibungIn, $scope.DauerIn, ImgDATAuri, KategorieIn);
    ResetInput();


}

var ImgDATAuri = "";

function SetImgDATAuri(DATAuri)
{
    ImgDATAuri = DATAuri;
    alert("var is set");
}

function ResetInput()
{
    document.getElementById("AddRezeptSuccess").className = "bar bar-header bar-balanced";
    //document.getElementById("AddRezeptSuccess").delay(5000).fadeOut();
    for (var i = 1; i < 6; i++)
    {
        alert("Input" + i);
        document.getElementById("Input" + i).value = "";
    }
}
