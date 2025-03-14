// LET - VAR - CONST

// VAR - las variables existen por fuera {}
if (true) {
  var peso = 62;
}
console.log(peso); // -> ¡aunque se declaró en el bloque, existe afuera!

// ❌ERROR - con LET por fuera del {} la variable no exite
if (true) {
  let apellido = "mendez";
  console.log(apellido); // Error: apellido no está definido
}

// VAR tambien permite la re- declaracion y reasignacion de un variable - y eso esta MAL❌
var temperatura = 25;
var temperatura = 30;
console.log(temperatura);

//❌ ERROR - ya declaraste `clima`
let clima = "lluvia";
console.log(clima);
clima = "soleado";
console.log(clima);

// Declaracion de una variable - palabra reservada + nombre
let edad;
var apellido; // ❌ no lo usamos mas

// Asignacion de una variable - let y const
let ciudad = "Buenos Aires";
const pais = "Argentina";
ciudad;
pais;

// Reasignacion de variables - let
let precio = 100;
precio;
precio = 150;
precio;

//❌ ERROR - Reasignacion de variables - const - no se pueden reasignar
const descuento = 10;
// descuento = 15; // ❌ Error: No se puede reasignar una constante

// TIPOS DE DATOS
// Numericos
let numero = 42;

// String
let texto = "Hola Mundo";

// Boolean
let esMayor = true;
let esMenor = false;

// Undefined
let sinValor;

// Null
let valorNulo = null;

// NaN
let resultadoInvalido = "hola" * 3;

// Math.round()
let redondeado = Math.round(4.5);
let redondeadoAbajo = Math.round(4.3);

// OPERADORES DE ASIGNACION EJEMPLOS
let a = 10;
a += 5; // 15 -> a = a + 5
a -= 3; // 12
a *= 2; // 24
a /= 4; // 6
a %= 2; // 0

// PORQUE a = 0 ?🤔

// Concatenando strings con +
let saludo = "Hola " + "Mundo";
saludo;

// Concatenando 2 variables con +
let nombrePersona = "Poli";
let apellidoPersona = "Ferreyra";
let nombreCompleto =
  nombrePersona + " " + apellidoPersona + " " + "este mi nombre";
let pruebaComillas = "esta es una prueba de 'el uso de esta comillas simples'";

// Concatenacion con backticks (template literals)
let edadPersona = 30;
let mensaje = `Hola, me llamo ${nombrePersona} ${apellidoPersona} y tengo ${edadPersona} años.`;
// backticks ``

// OPERADORES LOGICOS && - || - Not !
let condicion1 = true;
let condicion2 = true;
let condicion3 = false;

let and = condicion1 && condicion2;
let or = condicion1 || condicion2;
let Not = !condicion1;

// EXPRESIONES Y SENTENCIAS
let suma = 5 + 3; // -> Expresión (produce un valor)

console.log("hola"); // -> Sentencia (hace algo)

let nombre = "Poli"; // 'Poli' -> Expresión (asigna un valor)
let saludar = "Hola " + nombre; //-> Expresión (produce un valor concatenando)

console.log(saludar);

// Una expresión dentro de una sentencia
if (suma > 5) {
  // (suma > 5) -> Expresión (devuelve true)
  console.log("La suma es mayor que 5"); // Sentencia (hace algo)
}

// Otra expresión:
let animal = "gato"; // gato -> Expresión
let esGato = animal === "gato"; // true -> Expresión

// Otra sentencia:
function mostrarMensaje() {
  // Sentencia (declara una función)
  console.log("Esto es una función"); // Sentencia (hace algo)
}
mostrarMensaje(); // Sentencia (ejecuta la función)

// EJEMPLO
console.log("¡Hola mundo!");
let num = parseInt("10");
console.log(num);
console.log("El tipo de dato num es: " + typeof num);
let textNum = "10";
console.log(textNum);
console.log("El tipo de dato num es: " + typeof textNum);
let text = "esto es un texto";

// PROMPT
const prompt = require("prompt-sync")();
const diaDeHoy = prompt("Por favor, ingresa que dia es hoy:");
console.log("Hoy es" + " " + diaDeHoy);
