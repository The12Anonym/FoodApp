function addR($scope)
{
    var e = document.getElementById("KatAuswahl");
    var KategorieIn = e.options[e.selectedIndex].value;
    var Gerichtlist = GetGerichte();
    var zutaten = $scope.ZutatenIn;
    var zubereitung = $scope.ZubereitungIn;
    var strArr = [zutaten, zubereitung];
    var arr = StrToArr(strArr);
    var GerichtNew = new Gericht(Gerichtlist.length, $scope.NameIn, arr[0], arr[1], $scope.BeschreibungIn, $scope.DauerIn, ImgDATAuri, KategorieIn);
    ResetInput();
    WriteLocalStorage();
    console.log(GerichtNew);
}

// Auflistungsfunktion für neue Rezepte - neu = noch nicht im LocalStorage
function StrToArr(str)
{
    str[0].replace(', ', ',');
    str[0].replace(' ,', ',');
    str[1].replace('. ', '.');
    str[1].replace(' .', '.');
    // Ausfteilung der einzelnen Zutaten / Zubereitungsschritte
    str[0] = str[0].split(',');
    str[1] = str[1].split('.');
    return str;
}

var ImgDATAuri = "";

function SetImgDATAuri(DATAuri)
{
    ImgDATAuri = DATAuri;
    document.getElementById("AddImgSuccess").className = "bar bar-header bar-balanced";
    $("#AddImgSuccess").fadeIn();
    $("#AddImgSuccess").delay(5000).fadeOut();
}

function ResetInput()
{
    document.getElementById("AddRezeptSuccess").className = "bar bar-header bar-balanced";
    $("#AddRezeptSuccess").fadeIn();
    $("#AddRezeptSuccess").delay(5000).fadeOut();
    for (var i = 1; i < 6; i++)
    {
        document.getElementById("Input" + i).value = "";
    }
}
