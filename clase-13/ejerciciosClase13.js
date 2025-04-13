// # Ejercicios de Funciones en JavaScript

// ## 📌 Funciones Declaradas

// 1️⃣ Crea una función llamada saludar que reciba un nombre como parámetro y devuelva un mensaje saludando a esa persona.

let nombre = 'Nataly';

function saludar (nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar(nombre));

// 2️⃣ Crea una función, sumar que reciba dos parametros. Declara una variable global y otra variable dentro de la función con el nombre, resultado y que retorne la suma de los 3 valores.

let parametroScopeGlobal = 10;

function sumar(a, b) {
    let resultado = a + b + parametroScopeGlobal;
    return resultado;
}

console.log(sumar(5, 10));


// ## 📌 Funciones Expresadas

// 3️⃣ Crea una función expresada llamada multiplicar que reciba dos parametros y retorne el resultado.

let multiplicar = function(a, b) {
    return a * b;
}

console.log(multiplicar(5,10));


// 4️⃣ Crea una función expresada llamada esPar que reciba un parametro y devuelva true si es par o false si es impar.

let esPar = function(a) {
    if (a % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(esPar(5));
console.log(esPar(900));

// ## 📌 Funciones Flecha

// 5️⃣ Crea una función flecha llamada doble que reciba un parametro y devuelva el doble de su valor.

let doble = (a) => a * 2;

console.log(doble(900));


// 6️⃣ Crea una función flecha llamada mostrarMensaje que tome un nombre y devuelva un mensaje.

let mostrarMensaje = (nombre) => `Hola ${nombre}!`;

console.log(mostrarMensaje("Nataly"));