
// ejercicio 7
let numero1 = parseInt(prompt("Escribe un número 1"));
let numero2 = parseInt(prompt("Escribe un número 2"));
let numero3 = parseInt(prompt("Escribe un número 3"));
if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) { 
if (numero1>numero2 && numero1>numero3) {
    document.write ("el numero mayor es " + numero1)
} else if (numero2>numero1 && numero2> numero3) {
    document.write("el numero mayor es " + numero2);
} else {
    document.write("el numero mayor es " + numero3)
}
} else {
    document.write("uno de los valores es incorrecto")
}