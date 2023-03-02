// ejercicio 11
let num= parseInt(prompt("escribe un numero"));
if (!isNaN(num)) {
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
if (num % 2 === 0) {
document.write("Es divisible por 2. ")
}
if (num % 3 === 0) {
document.write("Es divisible por 3. ")
}
if (num % 5 === 0) {
document.write("Es divisible por 5. ")
}
if (num % 7 === 0) {
document.write("Es divisible por 7. ")
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7")
}
}  else { 
    document.write("ingresaste un valor incorrecto") 
}