// METODOS BASICOS DE ARRAY

// push() (Agrega un elemento al final del array)

let apellidos = ["Gonzalez", "Diaz"];
frutas.push("Perez"); 
console.log(apellidos); // ["Gonzalez", "Diaz", "Perez"]

let num = [1, 2, 3];
numeros.push(4);
console.log(num); // [1, 2, 3, 4]

// pop() (Elimina el último elemento del array)

let colores = ["Rojo", "Verde", "Azul"];
colores.pop();
console.log(colores); // ["Rojo", "Verde"]

let abc = ["a", "b", "c"];
letras.pop();
console.log(abc); // ["a", "b"]

// shift() (Elimina el primer elemento del array)

let animales = ["Perro", "Gato", "Conejo"];
animales.shift();
console.log(animales); // ["Gato", "Conejo"]
javascript

let otrosNum = [10, 20, 30];
numeros.shift();
console.log(otrosNum); // [20, 30]

// unshift() (Agrega un elemento al inicio del array)

let dias = ["Martes", "Miércoles"];
dias.unshift("Lunes");
console.log(dias); // ["Lunes", "Martes", "Miércoles"]

let masNum = [2, 3, 4];
numeros.unshift(1);
console.log(masNum); // [1, 2, 3, 4]

//join() (Convierte un array en un string)

let palabras = ["Hola", "Mundo"];
let oracion = palabras.join(" ");
console.log(oracion); // "Hola Mundo"

let otrosNumeros = [1, 2, 3];
console.log(otrosNumeros.join("-")); // "1-2-3"

// indexOf() (Busca la posición de un elemento)

let nombres = ["Ana", "Carlos", "Pedro"];
console.log(nombres.indexOf("Carlos")); // 1

let frutas = ["Manzana", "Pera", "Uva"];
console.log(frutas.indexOf("Uva")); // 2

// lastIndexOf() (Última aparición de un elemento)

let masNumeros = [1, 2, 3, 1, 4];
console.log(masNumeros.lastIndexOf(1)); // 3

let letras = ["a", "b", "c", "a"];
console.log(letras.lastIndexOf("a")); // 3

// includes() (Verifica si un elemento está en el array)

let paises = ["Argentina", "Brasil", "Chile"];
console.log(paises.includes("Brasil")); // true

let numeros = [5, 10, 15];
console.log(numeros.includes(20)); // false

// PROPIEDADES DE STRING

// length (Devuelve la cantidad de caracteres)

let palabra = "Hola";
console.log(palabra.length); // 4

let cantidadLetras = "Javascript";
console.log(cantidadLetras.length); // 10

// indexOf() (Encuentra la posición de un caracter o palabra)

let posicion = "Hola Mundo";
console.log(posicion.indexOf("Mundo")); // 5

let posicionPalabra = "Programar es divertido";
console.log(posicionPalabra.indexOf("divertido")); // 12

// METODOS DE STRING

// slice() (Extrae una parte de un string)

let saludo = "Hola Mundo";
console.log(saludo.slice(0, 4)); // "Hola"

let parteDe = "Javascript es genial";
console.log(parteDe.slice(0, 10)); // "Javascript"

// trim() (Elimina espacios en blanco al inicio y al final)

let sinEspacios = "  Hola  ";
console.log(sinEspacios.trim()); // "Hola"

let mensaje = "  Bienvenido ";
console.log(mensaje.trim()); // "Bienvenido"

// replace() (Reemplaza un texto dentro del string)

let reemplazo = "Me gusta el café";
console.log(reemplazo.replace("café", "té")); // "Me gusta el té"

let texto = "Hola Juan";
console.log(texto.replace("Juan", "María")); // "Hola María"

// split() (Divide un string en un array)

let lista = "manzana,pera,banana";
console.log(lista.split(",")); // ["manzana", "pera", "banana"]

let frase = "Hola mundo, cómo estás";
console.log(frase.split(" ")); // ["Hola", "mundo,", "cómo", "estás"]