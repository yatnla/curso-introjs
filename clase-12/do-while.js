// El bucle do...while funciona de manera similar al while
// pero con una diferencia clave: el código se ejecuta siempre al menos una vez
// incluso si la condición es falsa al principio. 
// Esto se debe a que la condición se evalúa después de ejecutar el bloque de código.

// Sintaxis
do {
    // Código a ejecutar - AUN CUANDO MI CONDICION ES FALSA EL PRINCIPIO❗❗
  } while (condición);

// Porque esto es util?
// Para situaciones donde querés que algo ocurra inicialmente
// luego decidir si sigue repitiéndose según una condición.

  // Ejemplos
  let intentos = 1;
do {
  console.log("Intento número: " + intentos);
  intentos++;
} while (intentos < 3);

console.log("Fin de los intentos.");

// Generar números aleatorios hasta que salga un valor específico
let numero;
do {
  numero = Math.floor(Math.random() * 10);
  console.log("Número generado:", numero);
} while (numero !== 7);
console.log("¡Se encontró el 7!");

