// # 🔧 **Instrucciones:**  
// - Crea un archivo llamado `ejerciciosClase8.js`.  
// - Copia y pega las consignas en comentarios (`//`) para tenerlas a mano mientras resuelves los ejercicios. 
// - Resolvé los ejercicios.
// - ¡Guarda los cambios y prueba tu código en la consola! 🚀

// > No te olvides de hacer tus commit para actualizar tu repo remoto


// ### EJERCICIOS

// **1. Declará una variable con tu nombre y otra con tu edad.**

var nombre = "Nataly";
var edad = 24;

// Mostrá ambos valores usando console.log().

console.log(nombre);
console.log(edad);

// ---

// **2. SUMA DE 2 NUMEROS**

// Declara las variables - num1 - num2 - resultado.

var num1 = 10;
var num2 = 10;

// Realiza los calculos utilizando las variables (num1 y num2)

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

// Mostra el resultado usando console.log()

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

// ---

// **3. CALCULOS SIMPLES**

// Pedile al usuario dos numeros.

// Recorda usar parseInt() para convertir texto a numero y prompt() para pedir la info al usuario

let num1Usuario = parseInt(prompt('Por favor, ingresá un número:'));
let num2Usuario = parseInt(prompt('Por favor, ingresá un número:'));


// Realiza los calculo de suma - resta - multiplicacion y division

let sumaNumUsuario = num1Usuario + num2Usuario;
let restaNumUsuario = num1Usuario - num2Usuario;
let multiplicacionNumUsuario = num1Usuario * num2Usuario;
let divisionNumUsuario = num1Usuario / num2Usuario;

// Mostrar el resultado de cada calculo usando console.log()´

console.log(sumaNumUsuario);
console.log(restaNumUsuario);
console.log(multiplicacionNumUsuario);
console.log(divisionNumUsuario);

// ---

// **4. CONCATENACION UTILIZANDO OPERADOR (+)**

// Utilizá las variables que creaste de nombre y edad

// Mostra en consola el mensaje "Mi nombre es: (tuvariable) y tengo (tuvariable) años"

console.log(`Mi nombre es: ${nombre} y tengo ${edad} años. `);

// ---

// **5. CONCATENACION UTILIZANDO TEMPLATE LITERALS (`${}`)**

// Mostrar el mismo mensaje anterior pero usando las backtics

// ---

// **6. BOOLEANOS Y CONDICIONALES**

// Declarar una variable nota con un numero.

var nota = 7;

// Si la nota es mayor o igual a 6

// Mostrar "Aprobado"
// Sino mostrar "Desaprobado"

if (nota >= 6) {
    console.log('Aprobado');
} else {
    console.log('Desaprobado');
}

// ---

// **7. PAR E IMPAR**
// Declara una variable con un numero y usa el operador (%) para saber si es par o impar.

// Mostrá ambos resultados con console.log() - "el numero es par" o "el numero es impar"

// Realiza el mismo ejercicio pero solicitando un número al usuario y mostra también el resultado.

var numImparPar = parseInt(prompt('Por favor ingresá un número:'))

if (numImparPar % 2 == 0) {
    console.log('El número es par.')
} else {
    console.log('El número es impar.');
}

// ---

// **8. CALCULADORA INTERACTIVA**

// Pedile al usuario dos números y que elija una operación aritmética (suma, resta, multiplicación, división), utilizando prompt(). 

// Según la operación elegida, realizá el cálculo y mostrá el resultado con console.log().

var numUser1 = parseInt(prompt('Ingresá el primer número:'));
var numUser2 = parseInt(prompt('Ingresá el segundo número:'));

var operacion = prompt('Seleccioná entre estas operaciones: suma, resta, multiplicación o divisón.');

switch (operacion) {
    case 'suma':
        console.log(numUser1 + numUser2);
        break;
    case 'resta':
        console.log(numUser1 - numUser2);
        break;
    case 'multiplicación':
        console.log(numUser1 * numUser2);
        break;
    case 'división':
        console.log(numUser1 / numUser2);
        break;
    default:
        console.log('Operación no válida. Seleccioná entre suma, resta, multiplicación o división.');
}