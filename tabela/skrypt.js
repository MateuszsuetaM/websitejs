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
  // var dj = '{"plan":[{"imie":"mateusz"}]}';
  // var dj = require('./plik.json');
  //
  //
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //         myArr = JSON.parse(this.responseText);
  //         document.getElementById("demo").innerHTML = myArr[0];
  //     }
  // };
  // xmlhttp.open("GET", "plik.json", true);
  // xmlhttp.send();


  // var client = new XMLHttpRequest();
  // client.open('GET', '/plik.json');
  // client.onreadystatechange = function() {
  //   alert(client.responseText);
  //   }
  // client.send();



  function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'plan.json', true);
  xobj.onreadystatechange = function () {
  if (xobj.readyState == 4 && xobj.status == "200") {

  // .open will NOT return a value but simply returns undefined in async mode so use a callback
  callback(xobj.responseText);

  }
  }
  xobj.send(null);
  }
  var txt ="";
  // Call to function with anonymous callback
  loadJSON(function(response) {
  // Do Something with the response e.g.
  jsonresponse = JSON.parse(response);
  // var json = jsonresponse[0].imie;
  txt += "<table border='1' class=\"tabelka\"><tbody>";
  txt += "<tr><th>Dzień</th><th>Godzina</th><th>Przedmiot</th><th>Grupa</th><th>Typ</th><th>Sala</th><th>Uwagi</th></tr>"
  var a = 0;
  for (x in jsonresponse) {

                txt += "<tr><td>" + jsonresponse[a].dzien + "</td><td>" + jsonresponse[a].godz + "</td><td>" + jsonresponse[a].przedmiot+ "</td><td>" + jsonresponse[a].grupa + "</td><td>" + jsonresponse[a].typ + "</td><td>"+jsonresponse[a].sala + "</td><td>" + jsonresponse[a].uwagi;
                a++;
            }

  txt += "</td></tr></tbody></table>";
  document.getElementById("imie").innerHTML = txt;// + ", " + obj.birth[0];
  // document.getElementById("imie").innerHTML = jsonresponse[0].imie;// + ", " + obj.birth[0];

  // Assuming json data is wrapped in square brackets as Drew suggests
  //console.log(jsonresponse[0].name);
// alert(jsonresponse[0].imie);
  });
}

  // var text = '[{"name":"John", "birth":"1986-12-14", "city":"New York"}]';

    // var myJSON = JSON.stringify(obj);

// alert(obj[0].imie);
//   var x = obj[0].name;
//   document.getElementById("tabela").innerHTML = x;// + ", " + obj.birth[0];
  // document.getElementById("tabela").innerHTML = obj.array[0].name;// + ", " + obj.birth[0];
  // document.getElementById("tabela").innerHTML =  obj.birth;



  // var wartosc = JSON.parse(dj);
  // document.getElementById("imie").innerHTML = wartosc.plan[0].imie;

// }
