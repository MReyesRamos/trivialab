//
// 1. ¿Qué significa HTML?
// HyperText Markup Language
// Lenguaje de Programación
// HotMail
// 2. ¿Qué es JavaScript?
// Es un enguaje de Programación
// Es un lenguaje de diseño
// Es una app
// 3. ¿Para qué sirve CSS?
// Para resolver funciones
// Para dar estilo a los elementos de un sitio web
// Para armar documentos

//var nombre = prompt("Cual es tu nombre?");
//var saludo = "Bienvenida";
//alert(saludo + nombre);
function Respuesta(botonid) {
    if (botonid == "Correcto") {
        alert("Respuesta Correcta");
    } else {
        alert("Respuesta Incorrecta");
    }
}
function hola() {
    const elem = document.getElementById("name-player");
    alert("Hola " + elem.value);
}
function validar1() {
    let respuesta1 = document.querySelector('input[name="pregunta1"]:checked')
        .value;
    if (respuesta1 === "correcto") {;
        alert("HyperText Markup Language");
    } 
    else 
    {
        (respuesta1 === "incorrecto");
        alert("HyperText Markup Language");
    }
}

function validar2() {
    let respuesta2 = document.querySelector('input[name="pregunta2"]:checked').value;
    if (respuesta2 === "correcto") {;
    alert("Es un lenguaje de Programación");
}
else {
    (respuesta2 === "incorrecto");
    alert("Es un lenguaje de Programación");
}
}

function validar3() {
    let respuesta3 = document.querySelector('input[name= "pregunta3"]:checked').value;
    if(respuesta3 ==="correcto") {;
    alert("Para dar estilo a los elementos de un sitio web");
    }
    else{
        (respuesta3 === "incorrecto");
        alert("Para dar estilo a los elementos de un sitio web");
    }
}