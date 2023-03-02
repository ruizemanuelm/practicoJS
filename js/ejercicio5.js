//ejercicio 5
let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe otro número"))
if (!isNaN(num1) && !isNaN(num2)) { 
document.write("La suma es: "+ (num1 + num2))
} else {
    document.write("ingresaste un valor incorreccto")
}