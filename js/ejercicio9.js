//ejercicio 9
let palabra = prompt("escriba una palabra");
let npalabra =palabra.length;
let i;
for (let i = 0; i< npalabra; i++) {
 if(palabra.charAt(i) === "a" || palabra.charAt(i) === "A"||
    palabra.charAt(i) === "e" || palabra.charAt(i) === "E"||
    palabra.charAt(i) === "i" || palabra.charAt(i) === "I"||
    palabra.charAt(i) === "o" || palabra.charAt(i) === "O"||
    palabra.charAt(i) === "u" || palabra.charAt(i) === "U" )
    {
        document.write(palabra.charAt(i) + " ")
    } 
}