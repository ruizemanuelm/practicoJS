// ejercicio 7
let numero1 = prompt("Escribe un número 1");
let numero2 = prompt("Escribe un número 2");
let numero3 = prompt("Escribe un número 3");
if (numero1>numero2 || numero1>numero3) {
    document.write ("el numero mayor es " + numero1)
} else if (numero2 > numero3) {
    document.write("el numero mayor es " + numero2);
} else {
    document.write("el numero mayor es " + numero3)
}