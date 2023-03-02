// ejercicio 10
let num= parseInt(prompt("escribe un numero"))
if (!isNaN(num)){
if (num % 2===0 || num % 3===0 || num % 5===0 || num % 7 === 0){
document.write("es divisible")
} else {
    document.write("no es divisible")}
} else { 
    document.write("ingresaste un valor incorrecto")
}