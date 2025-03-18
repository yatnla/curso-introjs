// Un objeto es una estructura que nos permite almacenar múltiples datos relacionados
// en una sola entidad. Los datos se guardan como pares clave-valor.

// SINTAXIS básica de un objeto literal:
const persona = {
  nombre: "Ana", // propiedad: valor
  edad: 30, // propiedad: valor
  "teléfono móvil": "123-456-789", // propiedad con espacio
  saludar: function () {
    // método: una función dentro del objeto
    console.log("¡Hola!");
  },
};

// Propiedades: son las características o atributos del objeto.
// En este caso, 'nombre' y 'edad' son propiedades del objeto 'persona'.

// Métodos: son funciones que están dentro de un objeto.
// 'saludar' es un método porque es una función que pertenece al objeto 'persona'.

// Acceder a las propiedades de un objeto:
console.log(persona.nombre); // Accede al valor de la propiedad 'nombre' → 'Ana'
console.log(persona.edad); // Accede al valor de la propiedad 'edad' → 30

// Notación de corchetes:
console.log(persona["nombre"]); // → 'Ana'

// ¿Cuándo usar la notación de corchetes?
// - Cuando la propiedad tiene espacios o caracteres especiales:
console.log(persona["teléfono móvil"]); // → '123-456-789'

// Cuando la propiedad es dinámica (por ejemplo, guardada en una variable):
const valorDeEdadDinamico = "edad";
console.log(persona[valorDeEdadDinamico]); // → 30
// Esto es útil si no sabemos el nombre de la propiedad de antemano,
// o si queremos recorrer un objeto con un bucle.

// Ejecutar un método:
persona.saludar(); // Llama a la función 'saludar' dentro del objeto → '¡Hola!' // como lo ejecuto? con la notacion de objeto.metodo+() -> persona.saludar()

// Ejemplo de objeto con diferentes tipos de datos:
// 'curso' es un objeto que contiene:
// - String (titulo)
// - Número (duracion)
// - Booleano (esGratis)
// - Array (temas)
// - Función (mostrarInfo)

const curso = {
  titulo: "Introducción a JavaScript",
  duracion: 3,
  esGratis: false,
  temas: ["Variables", "Funciones", "Objetos"],
  mostrarInfo: function () {
    console.log(`Curso: ${this.titulo}, Duración: ${this.duracion} meses`);
  },
};

// Ejecutar el método que muestra la información del curso:
curso.mostrarInfo(); // → 'Curso: Introducción a JavaScript, Duración: 5 semanas'

// ¿Qué es 'this' en JavaScript?
// 'this' es una palabra clave que hace referencia al objeto actual dentro de un método.
// Permite acceder a las propiedades o métodos del mismo objeto.

// ¿Por qué usar 'this' en lugar de nombrar la propiedad directamente?
// Si usamos el nombre del objeto directamente, el código dejaría de funcionar si copiamos o renombramos el objeto.
// 'this' hace que el método funcione siempre dentro del contexto del objeto donde se llama.

// Ejemplo
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  mostrarMarca: function () {
    console.log(this.marca); // Accede a la propiedad 'marca' del objeto
  },
};
coche.mostrarMarca(); // → 'Toyota'

// Aun si estamos 100% seguras que no vamos a renombrar el objeto...
// this - se usa como buena practica
// permite reutiliza el codigo - permite tener un contexto dinamico y ayuda al mantenimiento del codigo

// Ejemplo
const libro = {
  titulo: "JavaScript para principiantes",
  mostrarTitulo: function () {
    console.log(this.titulo); // Usamos 'this' para acceder a 'titulo'
  },
};

libro.mostrarTitulo(); // → 'JavaScript para principiantes'

// Si copiamos el método a otro objeto:
const otroLibro = {
  titulo: "Aprende React",
  mostrarTitulo: libro.mostrarTitulo,
};

otroLibro.mostrarTitulo(); // → 'Aprende React' (gracias a 'this')

// Es recomendable usar "const" para declarar un objeto
// No se pueden modificar una vez que se crea -> Inmutabilidad de la referencia
// Pero si podemos modificar una propiedad dentro de un objeto

const usuario = { nombre: "Ana" };

// ✅ Modificar propiedades está permitido:
usuario.nombre = "Laura";
console.log(usuario.nombre); // → 'Laura'

// ❌ Reasignar el objeto completo dará error:
// usuario = { nombre: 'Carlos' };
