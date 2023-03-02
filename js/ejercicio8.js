//ejercicio 8
let num = parseInt(prompt("escribe un numero"));
if (!isNaN(num)) {
if (num % 2 === 0) {
    document.write("Es divisible por 2");
    } else {
    document.write("No es divisible por 2");
    } 
} else {
    document.write("ingresaste un valor incorrecto")
}