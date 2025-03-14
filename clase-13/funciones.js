// FUNCION DECLARADA (también llamada "function declaration")
// Utilizamos la palabra reservada 'function' seguida del nombre,
// los parámetros entre paréntesis y entre llaves lo que queremos que haga la funcion.

// Una función realiza una tarea específica y puede ser llamada (invocada) en cualquier lugar del código
// y retorna una valor como resultado

// SINTAXIS
// Puede tener parametros o no - Los parentesis los tenemos que escribir siempre
function nombreDeLaFuncion() {
  //codigo a ejecutar / Escribimos la logica de nuestra funcion, lo que queremos que haga
}
function nombreDeLaFuncion(parametros) {
  //codigo a ejecutar
}
// INVOCACION DE LA FUNCION
// Invocar una funcion es llamarla para que se ejecute - para que realice todas las instrucciones que escribimos entre{}
nombreDeLaFuncion("pasamos los argumentos");

// Parámetro y argumento:
// - Un parámetro es una variable que se define en la declaración de la función y recibe valores al invocar la función.
// - Un argumento es el valor real que se pasa a la función al momento de invocarla.

// Ejemplo
function saludar(nombre) {
  // Aquí, 'nombre' es el parámetro y va a ser el valor que se pasa a la función cuando se invoca.
  // Podemos acceder a los parametros como si fueran variables
  console.log("¡Hola, " + nombre + "!");
}
console.log(saludar("Poli"));
//"Poli" es el valor - (el argumento) - que se pasa a la función para el parámetro 'nombre'

// FUNCION CON RETORNO
// 'return' es una palabra clave que permite a la función devolver un valor.
// El valor que se devuelve puede ser de cualquier tipo (números, cadenas, arrays, etc.)
// El 'return' termina la ejecución de la función y devuelve el valor especificado.

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 50));

// FUNCION EXPRESADA (también llamada "function expression")
// Es una función asignada a una variable.
// En este caso la función declarada no tiene nombre. Es una FUNCION ANONIMA
// y se invoca solo después de que ha sido definida.

// Ejemplo
let despedir = function (nombre) {
  console.log("Adiós, " + nombre + "!");
};
console.log(despedir("Poli")); // Argumento: "Juan" es el valor que se pasa a la función como argumento para el parámetro 'nombre'

let triplicar = function (numero) {
  return numero * 3;
};
console.log(triplicar(30)); // 90

// Funcion con valores por defecto
function saludo(nombre = "visitante", apellido = "anónimo") {
  return `Hola ${nombre} ${apellido}`;
}
console.log(saludo());

// SCOPE O ÁMBITO
// Alcance que tiene una variable - desde dónde podemos acceder a ella

// Scope Local
// La variable solo existe dentro de la función o bloque

function mostrarLocal() {
  let localVar = "Soy local";
  console.log(localVar); // Accede a la variable local
}
mostrarLocal(); // 'Soy local'
// ❌console.log(localVar); // Error: localVar is not defined

// Scope Global
// La variable está disponible en todo el código

let globalVar = "Soy global";

function mostrarGlobal() {
  console.log(globalVar); // Accede a la variable global
}
mostrarGlobal(); // 'Soy global'

// FUNCION FLECHA (Arrow function) - se incorpora en ECMAScript 6 (ES6)
// una forma más corta y moderna de escribir funciones en JS
// Similar a la función expresada, pero con una sintaxis más simple.
// Recibe el nombre por el operador (=>)

// Función flecha con RETURN IMPLICITO
// Si la funcion tiene una sola sentencia (una sola linea) se eliminan las llaves y la palabra reservada RETURN
const sumar = (a, b) => a + b;
console.log(sumar(3, 5)); // 8

// Función flecha con múltiples líneas y RETURN EXPLICITO
const esMultiplo = (num1 , num2) => {
let resto = num1 % num2
return resto === 0; // si el resto es 0 - entonces es multiplo
};
console.log(esMultiplo(20 , 4))
