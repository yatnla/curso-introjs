// Atajos con operadores logicos o (short-circuit evaluation - cortocircuito logico)
// Permiten que las expresiones logicas se evaluen de manera mas eficiente
// Nos ayudan a escribir un codigo mas corto y facil de leer

// cortocircuito logico
// ➡️ Objetivo: Mostrar cómo || devuelve el primer valor verdadero.
let nombre = '';
let saludo = nombre || 'poli';
console.log('Hola ' + saludo);

// verificar condiciones
// ➡️ Cambiar los valores de edad y tieneEntrada para ver cómo cambia el resultado.
let edad = 16;
let tieneEntrada = true;
let puedeEntrar = edad >= 18 && tieneEntrada;

console.log('¿Puede entrar?', puedeEntrar);

// ¿Qué se muestra en consola? (¡Hace pensar por coerción y lógicos!)
console.log(0 || 'Hola');
console.log(null && 'Chau');
console.log('' || 'Vacio');

// ➡️ ?? (nullish coalescing)
console.log(undefined ?? 'Valor por defecto'); // ❇️ EXTRA

// DEFINICION  -> ?? NULLISH COALESCING
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
// porque no lo devuelve como false? porque (??) no se fija si es true o false

let nombreConNull = null;
let usuario = nombreConNull ?? 'Poli';
console.log(usuario); // 'poli'

let precio;
let valorFinal = precio ?? 'No definido';
console.log(valorFinal); // 'No definido'

