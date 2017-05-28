function zegar(){
  var dzisiaj = new Date();

  var dzien   = dzisiaj.getDate();
  var miesiac = dzisiaj.getMonth()+1;
  var rok     = dzisiaj.getFullYear();

  var godzina = dzisiaj.getHours();
  var minuta  = dzisiaj.getMinutes();
  var sekunda = dzisiaj.getSeconds();

  if(miesiac<10)  miesiac = "0" + miesiac;
  if(dzien<10)    dzien   = "0" + dzien;
  if(sekunda<10)  sekunda = "0" + sekunda;
  if(minuta<10)   minuta  = "0" + minuta;
  if(godzina<10)  godzina = "0" + godzina;

  document.getElementById("klucz").innerHTML = dzien+"."+miesiac+"."+rok+" | "+godzina+":"+minuta+":"+sekunda;

  setTimeout("zegar()", 1000);
}
function tabela(){


  function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'plan.json', true);
  xobj.onreadystatechange = function () {
  if (xobj.readyState == 4 && xobj.status == "200") {

  callback(xobj.responseText);

  }
  }
  xobj.send(null);
  }

  //------------------------

  var txt ="";

  loadJSON(function(response) {
  jsonresponse = JSON.parse(response);

  txt += "<table border='1' class=\"tabelka\"><tbody>";
  txt +=   "<tr><th class=\"kom\">Dzień</th><th>Godzina</th><th>Przedmiot</th><th>Grupa</th><th>Typ</th><th>Sala</th><th>Uwagi</th></tr>";

  var a = 0;
  for (x in jsonresponse) {

                txt += "<tr><td>" + jsonresponse[a].dzien + "</td><td>" + jsonresponse[a].godz + "</td><td>" + jsonresponse[a].przedmiot+ "</td><td>" + jsonresponse[a].grupa + "</td><td>" + jsonresponse[a].typ + "</td><td>"+jsonresponse[a].sala + "</td><td>" + jsonresponse[a].uwagi;
                a++;
            }

  txt += "</td></tr></tbody></table>";
  document.getElementById("imie").innerHTML = txt;
  });
}
