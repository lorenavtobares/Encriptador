/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


var imagenBuscador = document.querySelector("img-derecha");
var textoH3 = document.querySelector(".subtitulo");
var areaDerecha = document.querySelector(".mostrando-texto");
var areaIzquierda = document.querySelector(".IngresoTexto");


function encriptar() {
    var frase = document.getElementById("IngresoTexto").value.toLocaleLowerCase();

    var textoCifrado = frase.replace(/e/img, "enter"); /* img -> la letra i : toma mayusculas y minusculaas  - la letra m: toma los saltos en las oraciones - la letra g: toma la oracion */
    var textoCifrado = textoCifrado.replace(/o/img, "ober"); /* lo que hace es tomar el texto y donde este la letra que esta entre // la remplaza con lo que esta entre "" */
    var textoCifrado = textoCifrado.replace(/i/img, "imes");
    var textoCifrado = textoCifrado.replace(/a/img, "ai");
    var textoCifrado = textoCifrado.replace(/u/img, "ufat");

    document.getElementById("img-derecha").style.display = "none";  /* elimina la imagen al encriptar*/
    document.getElementById("texto-derecha").style.display = "none";  /* elimina el texto al encriptar*/
    document.getElementById("mostrando-texto").innerHTML = textoCifrado; /* muestra el texto en la ventana de la derecha*/
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
    document.getElementById("mostrando-texto").style.display = "block";  /* muestra el textarea*/
    


    document.getElementById("boton-limpiar").style.display = "show";
    document.getElementById("boton-limpiar").style.display = "inherit";


}


function desencriptar() {
    var frase = document.getElementById("IngresoTexto").value.toLocaleLowerCase();

    var textoCifrado = frase.replace(/enter/img, "e"); /* img -> la letra i : toma mayusculas y minusculaas  - la letra m: toma los saltos en las oraciones - la letra g: toma la oracion */
    var textoCifrado = textoCifrado.replace(/ober/img, "o"); /* lo que hace es tomar el texto y donde este la letra que esta entre // la remplaza con lo que esta entre "" */
    var textoCifrado = textoCifrado.replace(/imes/img, "i");
    var textoCifrado = textoCifrado.replace(/ai/img, "a");
    var textoCifrado = textoCifrado.replace(/ufat/img, "u");

    document.getElementById("img-derecha").style.display = "none";  /* elimina la imagen al encriptar*/
    document.getElementById("texto-derecha").style.display = "none";  /* elimina el texto al encriptar*/
    document.getElementById("mostrando-texto").innerHTML = textoCifrado; /* muestra el texto en la ventana de la derecha*/
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";

}

function botonCopiar() {

    var cuadro = document.getElementById('mostrando-texto');
    cuadro.select();
    document.execCommand('copy');
    alert("se copio");

}


function limpiar() {

    document.getElementById("img-derecha").style.display = "block";
    document.getElementById("texto-derecha").style.display = "block";
    //document.getElementById("mostrando-texto").value = " ";
    //document.getElementById("IngresoTexto").value = " ";



    location.reload(); //vuelve a cargar la pagina
}