// EJERCICIOS - ATAJOS CON OPERADORES LOGICOS

console.log(5 && 0 || "Nada");  // ?
console.log("" || "Texto");     // ?
console.log(null && "Hola");    // ?
console.log("Hola" || false);   // ?
console.log("Prueba" && "Éxito"); // ?

// EJERCICIOS - ATAJOS CON OPERADORES LOGICOS COMBINADOS

console.log("JS" && null || "Aprendiendo"); 
console.log(0 && "Empezando" || 5 && "Terminando"); 


// Imaginemos que tenemos un formulario, y queremos mostrar "Completado" solo si el usuario ingresó su nombre y edad.
// Si falta alguno, mostrar "Faltan datos".
// Cambiar el valor de nombre = ""  y  edad = 0

let nombre = "Ana"; 
let edad = 25; 
let resultado = nombre && edad ? "Completado" : "Faltan datos";

console.log(resultado);

