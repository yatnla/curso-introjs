// ## 📌 Ejercicios de Arrays

// **1️⃣ Métodos básicos de Arrays**

// - Crea un array con 5 colores y usa .push() para agregar otro color.

let colores = ['azul', 'negro', 'rosa', 'verde', 'naranja'];

colores.push('celeste');

console.log(colores);


// - Usa .pop() para eliminar el último elemento del array.

let objetos = ['mesa', 'florero', 'lámpara', 'vaso', 'ventana'];

objetos.pop();

console.log(objetos);

// - Usa .unshift() para agregar un número al inicio de un array de números.

let numeros = [1, 2, 3, 4, 5];

numeros.unshift(0);

console.log(numeros);

// - Crea un array con nombres y usa .includes() para verificar si existe un nombre en la lista.

let nombres = ['Nataly', 'Nat', 'Naty', 'Natalie'];

console.log(nombres.includes('Natali'));

// - Crea un array con varios elementos y usa .indexOf() para encontrar la posición de un elemento específico.

console.log(objetos.indexOf('vaso'));

// - Usa .lastIndexOf() para encontrar la última aparición de un elemento en un array.

console.log(objetos.lastIndexOf('florero'));

// - Concatena los elementos de un array en un solo string usando .join().

console.log(numeros.join(' - '));

// ## 📌 Ejercicios de Strings

// **2️⃣ Métodos y Propiedades de Strings**

// - Crea una variable con tu nombre y usa .length para ver cuántas letras tiene.

const nombre = 'Nataly';
console.log(nombre.length);

// - Escribe un mensaje y usa .indexOf() para encontrar la posición de una palabra dentro del mensaje.

const mensaje = 'Hola mi nombre es Nataly y tengo 24 años.';

console.log(mensaje.indexOf('Nataly'));

// - Escribe un texto con espacios antes y después y usa .trim() para eliminar los espacios.

const textoConEspacios = ' Mi nombre es Nataly y tengo 24 años. ';
console.log(textoConEspacios.trim());

// - Escribe una frase y usa .replace() para cambiar una palabra por otra.

console.log(mensaje.replace('Nataly', 'Naty'));

// - Crea una lista de frutas en un string y usa .split() para convertirlo en un array.

let frutas = "manzana, banana, durazno, frutilla, kiwi";

console.log(frutas.split(", "));

// - Usa .slice() para extraer una parte de un string.

console.log(mensaje.slice(0, 24));

// - Crea una frase y reemplaza una palabra con .replace(), luego convierte todo el texto en un array con .split().

let frase = "What I'm really scared of is believing the words society makes me speak are my own."

let nuevaFrase = frase.replace("society", "leaders");

console.log(nuevaFrase);

let arrayFrase = nuevaFrase.split(" ");

console.log(arrayFrase);