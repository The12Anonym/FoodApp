      

            var Gerichtlist = [];
            var Kategorielist = [];
            
            function Gericht(GeId, GeName, GeZutaten, GeZubereitung, GeBeschreibung, GeZeit, GeBild, KaId)
            {
                this.id = GeId;
                this.name = GeName;
                this.zutaten = GeZutaten;
                this.zubereitung = GeZubereitung;
                this.beschreibung = GeBeschreibung;
                this.dauer = GeZeit;
                this.img = GeBild;
                this.kategorie = KaId;
                Gerichtlist.push(this);
            }
            
            function Kategorie(KaId, KaName)
            {
                this.id = KaId;
                this.name = KaName;
                Kategorielist.push(this);
            }
            
            Gericht.prototype.GetKategorie = function ()
            {
                for (var k = 0, len = Kategorielist.length; k < len; k++)
                {
                    var x = Kategorielist[k];
                    if (this.kategorie === x.id)
                    {
                        return x.name;
                    }
                }
            };           
            
            
            
            
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

            }
            
            function test()
            {
                alert("WEED");
            }
            
            function WriteLocalStorage()
            {
                
                for (var i = 0, a = Gerichtlist.length; i < a; i++)
                {
                    var objekt = Gerichtlist[i];
                    localStorage.setItem('Gericht' + i + 'ID', objekt.id);
                    localStorage.setItem('Gericht' + i + 'NAME', objekt.name);
                    localStorage.setItem('Gericht' + i + 'ZUTATEN', objekt.zutaten);
                    localStorage.setItem('Gericht' + i + 'ZUBEREITUNG', objekt.zubereitung);
                    localStorage.setItem('Gericht' + i + 'BESCHREIBUNG', objekt.beschreibung);
                    localStorage.setItem('Gericht' + i + 'ZEIT', objekt.dauer);
                    localStorage.setItem('Gericht' + i + 'BILD', objekt.img);
                    localStorage.setItem('Gericht' + i + 'KAID', objekt.kategorie);
                }
                localStorage.setItem('GerichtANZAHL', Gerichtlist.length);

                for (var u = 0, b = Kategorielist.length; u < b; u++)
                {
                    var objektk = Kategorielist[u];
                    localStorage.setItem('Kategorie' + u + 'ID', objektk.id);
                    localStorage.setItem('Kategorie' + u + 'NAME', objektk.name);
                }
                localStorage.setItem('KategorieANZAHL', Kategorielist.length);
            }
            
            function DeleteGericht(id)
            {
                id--;
                localStorage.removeItem('Gericht' + id + 'ID');
                localStorage.removeItem('Gericht' + id + 'NAME');
                localStorage.removeItem('Gericht' + id + 'ZUTATEN');
                localStorage.removeItem('Gericht' + id + 'ZUBEREITUNG');
                localStorage.removeItem('Gericht' + id + 'BESCHREIBUNG');
                localStorage.removeItem('Gericht' + id + 'ZEIT');
                localStorage.removeItem('Gericht' + id + 'BILD');
                localStorage.removeItem('Gericht' + id + 'KAID');
                id++;
                for(var x = 0, f = Gerichtlist.length;x < f;x++)
                {
                    var objekt1 = Gerichtlist[x];
                    if(id == objekt1.id)
                    {
                        Gerichtlist.splice(x,1);
                        removeRezept(x);
                    }
                }
                localStorage.setItem('GerichtANZAHL', Gerichtlist.length);
            }
            
            function GetGerichte()
            {
                return Gerichtlist;
            }
            function GetKategorien()
            {
                return Kategorielist;
            }
                