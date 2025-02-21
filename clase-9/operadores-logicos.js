// que devuelve
console.log(true && false);
console.log(false || true);
console.log(!false);
console.log(true && 'Hola');
console.log(false || 'Chau');

// cortocircuito logico
// ➡️ Objetivo: Mostrar cómo || devuelve el primer valor verdadero.
let nombre = '';
let saludo = nombre || 'Desconocido';
console.log('Hola ' + saludo);

// verificar condiciones
// ➡️ Cambiar los valores de edad y tieneEntrada para ver cómo cambia el resultado.
let edad = 16;
let tieneEntrada = true;


console.log('¿Puede entrar?', puedeEntrar);

// ¿Qué se muestra en consola? (¡Hace pensar por coerción y lógicos!)
// ➡️ Objetivo: Introducir el ?? para nullish coalescing, sin profundizar tanto.
console.log(0 || 'Hola');
console.log(null && 'Chau');
console.log('' || 'Vacio');

console.log(undefined ?? 'Valor por defecto'); // ❇️

// DEFINICION Y MAS EJEMPLOS DEL ?? *NULLISH COALESCING
// Es un operador lógico que se usa para dar un valor por defecto cuando una variable es:

// null
// undefined
// Solo salta el valor por defecto si es exactamente null o undefined.
// Si la variable es otro valor falso como 0, '' (cadena vacía), o false, NO lo reemplaza.

let nombreSinValor;
let nombreFinal = nombreSinValor ?? 'Invitado';

console.log(nombreFinal); // 'Invitado'

let edad0 = 0;
let edadFinal = edad0 || 18;

console.log(edadFinal); // 18 😱 ❌ estaria mal

// ¿Por qué 0 nos dio 18?
// Porque el operador || considera 0, false y '' como falsos.

// En cambio, con ??:
let edadCon0 = 0;
let edadFinalBis = edadCon0 ?? 18;

console.log(edadFinalBis); // 0 ✅

// ?? pregunta si es null o undefined como 0 no es ninguno de esos lo devuelve como valido
// porque no lo devuelve como false? porque ?? no se fija si es true o false

let nombreConNull = null;
let usuario = nombreConNull ?? 'Desconocido';
console.log(usuario); // 'Desconocido'

let precio;
let valorFinal = precio ?? 'No definido';
console.log(valorFinal); // 'No definido'



// Resolver una condición compuesta
// ➡️ Objetivo: Combinar operadores lógicos con if/else.
