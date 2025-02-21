// coercion implicita



// los operadores -, *, / esperan números, entonces JS convierte el string '25' a número automáticamente.
// El + es el único que concatena si hay un string, por eso es diferente.

// Que deberia usar para convertir el texto a numero
// Mostrar el tipo de dato con typeof antes y después.


// Si alguno de los operandos es una cadena (string), el + concatena (une) en lugar de sumar.
// Si ambos son números, el + suma.
// JS convierte el 5 a string porque concatenar es más común que querer sumar un número con texto.

// coercion explicita



// usen parseInt() o parseFloat() y vean la diferencia.

//DIFERENCIAS ENTRE NUMBER() PARSEINT() PARSEFLOAT()
// Método	¿Qué hace?	Ejemplo	Resultado
// Number()	Convierte todo el string a número. Si hay algo raro, da NaN.	Number('25.5')	25.5
// parseInt()	Lee hasta donde haya números enteros. Si hay letras, corta ahí.	parseInt('25px')	25
// parseFloat()	Lee números con decimales. Si hay letras, corta ahí.	parseFloat('25.5px')	25.5

console.log(Number("25.5px"));
console.log(parseInt("25.5px"));
console.log(parseFloat("25.5px"));

console.log(Number("hola"));
console.log(parseInt("hola"));
console.log(parseFloat("hola"));

// 🧠 Casos clave donde te sirve cada uno:

// Number() → Si sabés que el string debería ser un número puro (sin unidades, sin cosas raras).
// parseInt() → Si esperás números enteros y tal vez vengan con algo más ('100px').
// parseFloat() → Si esperás números con decimales y pueden venir con algo más ('12.5kg').

let edad = '25';
let aniosFaltantes = 5;

// Corregido con Number()
console.log(Number(edad) + aniosFaltantes);

// También serviría parseInt()
console.log(parseInt(edad) + aniosFaltantes);

// Pero como edad es "limpio", todos dan igual acá
console.log(parseFloat(edad) + aniosFaltantes);