// El bucle while repite un bloque de código mientras se cumpla una condición.
// Si la condición es verdadera, el código dentro del bucle se ejecutará
// y continuará repitiéndose hasta que la condición sea falsa.

//Sintaxis
while (condicion) {
  // Código a ejecutar
  // Colocar contador para que el codigo deje de ejecutarse,
  // PARA QUE LA CONDICION DEJE DE SER VERDADERA❗❗
}

// Ejemplos
let num = 1;
while (num <= 5) {
  console.log("num es igual a:" + num);
  num++; // contador para cortar la ejecucion del codigo y no caer un un loop infinito
}

let vuelta = 1;
while (vuelta <= 6) {
  console.log(`Dando la vuelta número: ${vuelta}`);
  vuelta++; 
}
// Crear un programa que pida un número y cuente hasta ese número usando un while.
const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un número:");
let contador = 13;

while (contador <= numero) {
  console.log(contador);
  contador++;
}


