      

            var Gerichtlist = [];
            var Kategorielist = [];

            function Gericht(GeId, GeName, GeZutaten, GeZubereitung, GeBeschreibung, GeZeit, GeBild, KaId)
            {
                this.myId = GeId;
                this.myName = GeName;
                this.myZutaten = GeZutaten;
                this.myZubereitung = GeZubereitung;
                this.myBeschreibung = GeBeschreibung;
                this.myZeit = GeZeit;
                this.myBild = GeBild;
                this.myKaId = KaId;
                Gerichtlist.push(this);
            }
            Gericht.prototype.Kategorie = function ()
            {
                for (var k = 0, len = Kategorielist.length; k < len; k++)
                {
                    var x = Kategorielist[k];
                    if (this.myKaId === x.myId)
                    {
                        return x.myName;
                    }
                }
            };

            function Kategorie(KaId, KaName)
            {
                this.myId = KaId;
                this.myName = KaName;
                Kategorielist.push(this);
            }

            function ReadLocalStorage()
            {
                for (var z = 0; z < localStorage.getItem('GerichtANZAHL'); z++)
                {
                    var GeId = localStorage.getItem('Gericht' + z + 'ID');
                    var GeName = localStorage.getItem('Gericht' + z + 'NAME');
                    var GeZutaten = localStorage.getItem('Gericht' + z + 'ZUTATEN');
                    var GeZubereitung = localStorage.getItem('Gericht' + z + 'ZUBEREITUNG');
                    var GeBeschreibung = localStorage.getItem('Gericht' + z + 'BESCHREIBUNG');
                    var GeZeit = localStorage.getItem('Gericht' + z + 'ZEIT');
                    var GeBild = localStorage.getItem('Gericht' + z + 'BILD');
                    var KaId = localStorage.getItem('Gericht' + z + 'KAID');
                    var Rezept = new Gericht(GeId, GeName, GeZutaten, GeZubereitung, GeBeschreibung, GeZeit, GeBild, KaId);
                }
                for (var w = 0, j = localStorage.getItem('KategorieANZAHL'); w < j; w++)
                {
                    var KaId = localStorage.getItem('Kategorie' + w + 'ID');
                    var KaName = localStorage.getItem('Kategorie' + w + 'NAME');
                    var cate = new Kategorie(KaId, KaName);
                }
                var testtest = Kategorielist[0];
                var weed = document.getElementById('187');
                weed.innerHTML = testtest.myName;
            }

            function WriteLocalStorage()
            {
                for (var i = 0, a = Gerichtlist.length; i < a; i++)
                {
                    var objekt = Gerichtlist[i];
                    localStorage.setItem('Gericht' + i + 'ID', objekt.myId);
                    localStorage.setItem('Gericht' + i + 'NAME', objekt.myName);
                    localStorage.setItem('Gericht' + i + 'ZUTATEN', objekt.myZutaten);
                    localStorage.setItem('Gericht' + i + 'ZUBEREITUNG', objekt.myZubereitung);
                    localStorage.setItem('Gericht' + i + 'BESCHREIBUNG', objekt.myBeschreibung);
                    localStorage.setItem('Gericht' + i + 'ZEIT', objekt.myZeit);
                    localStorage.setItem('Gericht' + i + 'BILD', objekt.myBild);
                    localStorage.setItem('Gericht' + i + 'KAID', objekt.myKaId);
                }
                localStorage.setItem('GerichtANZAHL', Gerichtlist.length);

                for (var u = 0, b = Kategorielist.length; u < b; u++)
                {
                    var objektk = Kategorielist[u];
                    localStorage.setItem('Kategorie' + u + 'ID', objektk.myId);
                    localStorage.setItem('Kategorie' + u + 'NAME', objektk.myName);
                }
                localStorage.setItem('KategorieANZAHL', Kategorielist.length);
            }
            
            function GetGerichte()
            {
                return Gerichtlist;
            }
            function GetKategorien()
            {
                return Kategorielist;
            }
                