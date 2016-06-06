window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1nVY9WIgl3G_tPkePT-WIqWb-e1h_8MAy92_X2bmbhJc/pubhtml';

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  console.log(chooseRandom(data));
}

function chooseRandom (list) {
  var randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
;;;
