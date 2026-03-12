function secondsToDhms(seconds) {
    seconds = Number(seconds/1000);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
    }

//Define graduation date 
let military_date  = new Date("1 April 2026 12:00:00");

var display_military_date = document.getElementById("military_date");

var display_aphorism = document.getElementById("aphorism");

const aphorisms = [

"الطبلة يا رااعي",
"بالعدااد إثنين",
"حد إثنين ... إثنين",
"انا زعلااان",
"كلية الضباط الإحتياط .. جنبااان سلاااااا",
"ياا معفن",
"الدفعة 166 عندها سرعة استجابة عالية",
"استرح وشرب ماية استرح"
];

function displayDate(){

let datenow = new Date();
console.log(datenow);


let diff = military_date - datenow;

let result = secondsToDhms(diff);

display_military_date.innerHTML = result;

}

function displayAphorism(){

const randomIndex = Math.floor(Math.random()*aphorisms.length);

display_aphorism.innerHTML = aphorisms[randomIndex];

}