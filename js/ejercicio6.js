//ejercicio 6
let numero2 = prompt("Escribe un número");
let numero1 = prompt("Escribe otro número");
if (!isNaN(numero1) && !isNaN(numero2)) { 
if (numero1>numero2) {
    document.write ("el numero mayor es " + numero1)
} else if (numero2>numero1) {
    document.write("el numero mayor es " + numero2)
    }
    else {
        document.write("los numeros son iguales")
    }
} else {
        document.write("ingresaste un valor incorreccto")
    }