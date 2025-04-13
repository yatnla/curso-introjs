// ## 1. Método `map()`

// ### Ejercicio 1: Duplicar valores
// Crear un nuevo array con el doble de los valores del array original.

let numeros = [1, 5, 10, 15];

let dobles = numeros.map(function(a) {
    return a * 2;
});

console.log(numeros);
console.log(dobles);

// ---
// ### Ejercicio 2: Convertir nombres a mayúsculas
// Usa `map()` pasando una función por referencia para transformar un array de nombres en mayúsculas.

let nombres = ['nataly', 'nat', 'naty', 'natalie'];

let nombresUpperCase = nombres.map(function(a) {
    return a.toUpperCase();
})

console.log(nombres);
console.log(nombresUpperCase);

// 💡 Ayudín: En la clase 15 hay una tabla con metodos y propiedades de string. Fijate cual tenes que usar para convertir un string a mayúscula😉


// ## 2. Método `filter()`

// ### Ejercicio 3: Filtrar números pares
// Usa `filter()` para obtener solo los números pares de un array.

let filtrarPares = numeros.filter((a) => a % 2 === 0);

console.log(filtrarPares);

// ---
// ### Ejercicio 4: Filtrar palabras con más de 5 letras
// Usa `filter()` para obtener solo las palabras con más de 5 letras. Usá una funcion flecha y pasala como referencia.

let filtrarLength = nombres.filter((a) => a.length > 5);

console.log(filtrarLength);

// ---

// ## 3. Método `reduce()` (Acumulador y Elemento Actual)

// ### Ejercicio 5: Sumar valores de un array
// Usa `reduce()` para obtener la suma total de un array de números.

const sumaNumeros = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0);

console.log(sumaNumeros); 

// ---
// ### Ejercicio 6: Multiplicar valores de un array
// Usa `reduce()` con una función por referencia para multiplicar todos los valores de un array.

let multiplicar = function(acumulador, valorActual) {
    return acumulador * valorActual;
}

let resultado = numeros.reduce(multiplicar, 1);

console.log(resultado);

// ---

// ## 4. Método `find()`

// ### Ejercicio 7: Encontrar un número mayor a 10
// Usa `find()` para encontrar el primer número mayor a 10 dentro del array.

let encontrar = numeros.filter((a) => a > 10);

console.log(encontrar);

// ---
// ### Ejercicio 8: Buscar un usuario por nombre
// Usa `find()` pasando una función declarada para encontrar un usuario dentro de un array de objetos.

function buscarUsuario(a) {
    return nombres.find(function(nombre) {
        return nombre === a;
    });
}

console.log(buscarUsuario('natalio'));
console.log(buscarUsuario('nataly'));

// ---

// ## 5. Método `forEach()`

// ### Ejercicio 9: Mostrar en la terminal cada elemento de un array
// Usa `forEach()` para recorrer un array y mostrar en la consola los elementos.

let artistas = ['FKA twigs', 'Kelela', 'Sevdaliza'];

artistas.forEach(function(a) {
    console.log(a);
})

console.log(artistas);

// ---
// ### Ejercicio 10: Modificar valores dentro de un array vacío
// Usa `forEach()` para llenar un nuevo array con valores al cuadrado.

const cuadrados = [];

numeros.forEach(a => {
    cuadrados.push(a ** 2);
});

console.log(cuadrados);

// 💡 Ayudín: Para calcular el cuadrado de un número en JavaScript, existen distintas maneras. Pueden investigar cómo hacerlo utilizando operadores aritméticos o explorando métodos nativos de JavaScript para trabajar con números.
// Prueben dos formas distintas de resolver el ejercicio.
