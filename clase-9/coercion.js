// La coersion permite convertir un tipo de dato en otro
// Coersion implicita y explicita
// Implicita: la hace JS - JS gestiona las conversiones
// Explicita: la haces vos

// coercion implicita
console.log(5 + "m");
console.log("10" - 5);
console.log("5" * 2);
console.log("20" / "4");
console.log("hola" * 3);

// los operadores (-), (*), (/) esperan números, entonces JS convierte el string '5', por ej, a número automáticamente.
// El (+) es el único que concatena si hay un string, por eso es diferente.

// Si alguno de los operandos es una cadena (string), el (+) concatena - une - en lugar de sumar.
// Si ambos son números, el (+) suma.
// JS convierte el 5 a string porque concatenar es más común que querer sumar un número con texto.

// coercion explicita
// Que deberia usar para convertir el texto a numero
let edadusuario = parseInt("25.5");
console.log(typeof edadusuario);

//DIFERENCIAS ENTRE NUMBER() PARSEINT() PARSEFLOAT()
// Number()	Convierte todo el string a número. Si hay algo raro, da NaN.	Number('25.5') ->	25.5
// parseInt() Lee hasta donde haya números enteros. Si hay letras, corta ahí.	parseInt('25px') ->	25
// parseFloat()	Lee números con decimales. Si hay letras, corta ahí.	parseFloat('25.5px') ->	25.5

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