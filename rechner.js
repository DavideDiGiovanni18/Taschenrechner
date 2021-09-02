var zahlen =[];
var classes =["null","eins","zwei","drei","vier","fuenf","sechs","sieben","acht","neun","punkt"];
var listener = [];
var array = [getZahl0,getZahl1,getZahl2,getZahl3,getZahl4,getZahl5,getZahl6,getZahl7,getZahl8,getZahl9,getPunkt];
var aktuell ="";
var zahl = document.getElementById("zahl");
var was =0;
var loesung =0;

var zahlenspeicher= [];
var countZahl=0;

initalizeListener();

function initalizeListener() {
//erstellt für alle Zahlen(divs)einen ByClassNameTag
for (var i = 0; i < classes.length; i++) {
  listener[i] =document.getElementsByClassName(classes[i]);
}
//dann werden die listener auf die divs gehängt
  for (var i = 0; i < classes.length; i++) {
    aktuell = listener[i];
    aktuell[0].addEventListener("click", array[i],false);
  }
}

document.getElementsByClassName("geteilt")[0].onclick = function(){
  if(zahlenspeicher.length>=1){
was =1;
countZahl++;
}
};

document.getElementsByClassName("mal")[0].onclick = function(){
  if(zahlenspeicher.length>=1){
was =2;
countZahl++;
}
};

document.getElementsByClassName("minus")[0].onclick = function(){
if(zahlenspeicher.length>=1){
was =3;
countZahl++;
}
};

document.getElementsByClassName("plus")[0].onclick = function(){
if(zahlenspeicher.length>=1){
was =4;
countZahl++;
}

};

document.getElementsByClassName("prozent")[0].onclick = function(){
if(zahlenspeicher.length>=1){
  zahl.innerHTML = (zahlenspeicher[0]/100);
  zahlenspeicher[0] =(zahlenspeicher[0]/100);
}

};

document.getElementsByClassName("ac")[0].onclick = function(){
was =0;
zahlenspeicher =[];
zahl.innerHTML = 0;
countZahl =0;
};


document.getElementsByClassName("gleich")[0].onclick = function(){
  countZahl++;
  loesung=0;
  switch (was) {
    case 1:
    loesung = zahlenspeicher[0];
    for (var i = 1; i < zahlenspeicher.length; i++) {
      if(zahlenspeicher[i]==0){
        loesung ="Divided by 0";
        break;
      }
      loesung /= zahlenspeicher[i];
    }
      break;
    case 2:
    loesung = zahlenspeicher[0];
    for (var i = 1; i < zahlenspeicher.length; i++) {
      loesung *= zahlenspeicher[i];
    }
      break;
    case 3:
    loesung = zahlenspeicher[0];
    for (var i = 1; i < zahlenspeicher.length; i++) {
      loesung -= +zahlenspeicher[i];
    }
      break;
    case 4:
    for (var i = 0; i < zahlenspeicher.length; i++) {
      loesung += +zahlenspeicher[i];
    }
      break;
    default:
    loesung = zahlenspeicher[0];
    if(isNaN(loesung)){
      loesung =0;
    }
  }

  if(isNaN(loesung)&&loesung!="Divide by 0"){
  window.alert("Nicht die blauen Knöpfe voll spamen!");
    loesung ="Fehler";
  }

zahl.innerHTML= loesung;
zahlenspeicher =[];
countZahl=0;
};

//Diese Funktionen geben die Zahl auf in dem Div zurück
function getZahl0() {
ausgabe(0);
}

function getZahl1() {
ausgabe(1);
}
function getZahl2() {
ausgabe(2);
}

function getZahl3() {
ausgabe(3);
}


function getZahl4() {
ausgabe(4);
}


function getZahl5() {
ausgabe(5);
}


function getZahl6() {
ausgabe(6);
}


function getZahl7() {
ausgabe(7);
}

function getZahl8() {
ausgabe(8);
}


function getZahl9() {
ausgabe(9);
}
function getPunkt() {
  ausgabe(10);
}

function ausgabe(zahll){
  var getZahl = getZahlObjekt(zahll)[0].getElementsByTagName("p")[0].innerHTML;
  var anzahlZahlenbreite =zahlenspeicher[countZahl] +"";

if(anzahlZahlenbreite =="0"&&anzahlZahlenbreite.length ==1&&getZahl==0){//nur eine Null als vorzeichen gültig, bzw. keine
zahlenspeicher[countZahl]=0;
}else{
  if(anzahlZahlenbreite =="0"&&getZahl!=0&&getZahl!="."){
    zahlenspeicher[countZahl]="";
  }

try{
if(anzahlZahlenbreite.indexOf(".")!=-1&&getZahl=="."){//ermöglicht es nur ein punkt einzugeben
  getZahl="";
}else if(getZahl=="."&&anzahlZahlenbreite =="undefined"&&anzahlZahlenbreite !="0."){//Setz ein 0 vor dem punkt beim klick am anfang
getZahl="0.";
}

}catch(e){
  console.log(e);
}

  if(anzahlZahlenbreite.length>=1&&anzahlZahlenbreite !="undefined" &&anzahlZahlenbreite.length<7){
    zahlenspeicher[countZahl] = zahlenspeicher[countZahl] +getZahl;//merged die zahlen zusammen, Max länge=7
    getZahl = zahlenspeicher[countZahl] ;
  }

if(anzahlZahlenbreite.length>6&&anzahlZahlenbreite  !="undefined"){
  }else {
    zahl.innerHTML  =getZahl;
    zahlenspeicher[countZahl] =zahl.innerHTML;
  }

}
}

function getZahlObjekt(zahl) {
  return aktuell = listener[zahl];
}
