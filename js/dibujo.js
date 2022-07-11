//variables para lineas externas
var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
var colSupIz = document.getElementById('colorSupIz');
var colSupDr = document.getElementById('colorSupDer');
var colInIz = document.getElementById('colorInfIz');
var colInDr = document.getElementById('colorInfDer');
var colSI = document.getElementById('colorSI');
var colSD = document.getElementById('colorSD');
var colII = document.getElementById('colorII');
var colID = document.getElementById('colorID');
boton.addEventListener('click', dibujoPorClicks);
//variables para lineas internas
var textoInt = document.getElementById('texto_lineasInt');
var botonInt = document.getElementById('botoncitoInt');
botonInt.addEventListener('click', dibujoPorClicksInt);
//variables de ancho y lienzo
var d = document.getElementById("dibujito");
var ancho = d.width;
var anchoInt = ancho/2;
var lienzo = d.getContext("2d");
// function que dibuja las lineas
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}
//function de lineas externas bordes
function dibujoPorClicks(){
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;
    var x, y, yy;
    for (var l = 0; l < lineas; l++) {
        y = espacio * (l+1);
        x = espacio * l;
        yy = ancho - (espacio * (l+1));
            dibujarLinea(colSupIz.value,0,y,yy,0);
            dibujarLinea(colInDr.value,y,ancho,ancho,yy);
            dibujarLinea(colSupDr.value,x,0,ancho,y);
            dibujarLinea(colInIz.value,0,x,y,ancho);
    // recuadro del canvas
    dibujarLinea("black", 0,0,0,ancho);
    dibujarLinea("black", ancho,ancho,0,ancho);
    dibujarLinea("black", 0,0,ancho,0);
    dibujarLinea("black", ancho,0,ancho,ancho);
    }
}
console.log("colorSupIz");
// function de lineas en crus internas
function dibujoPorClicksInt(){
    var line = parseInt(textoInt.value);
    var espacio = anchoInt / line;
    var x, y, xx, yy;
    for (var l = 0; l < line; l++){
        y = espacio * l;
        x = anchoInt - y;
        xx = anchoInt + y;
        yy = ancho - y;
        dibujarLinea(colSI.value,anchoInt,y,x,anchoInt);
        dibujarLinea(colSD.value,anchoInt,y,xx,anchoInt);
        dibujarLinea(colID.value,anchoInt,yy,xx,anchoInt);
        dibujarLinea(colII.value,anchoInt,yy,x,anchoInt);
    //cruz centro
    dibujarLinea("black",anchoInt,0,anchoInt,ancho);
    dibujarLinea("black",0,anchoInt,ancho,anchoInt);
    }
}


