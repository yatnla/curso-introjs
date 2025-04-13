// # Ejercicios de Objetos Literales en JavaScript

// ## 📌 Ejercicio 1: Acceder a Propiedades

// - Crea un objeto llamado persona con las propiedades nombre y edad. Luego, muestra un mensaje en consola utilizando los valores de estas propiedades.

let persona = {
    nombre: 'Nataly',
    edad: 24
};

console.log(`Hola, soy ${persona.nombre} y tengo ${persona.edad} años!`);

// ## 📌 Ejercicio 2: Modificar Propiedades

// Crea un objeto auto con las propiedades marca, modelo y año. Luego, cambia el valor de año y muestra el objeto actualizado en consola.

let auto = {
    marca: 'Mitsubishi',
    modelo: 'Outlander',
    año: 2015
};

auto.año = 2021;

console.log(auto);


// ## 📌 Ejercicio 3: Usar this

// Crea un objeto usuario con las propiedades nombre y email, y un método mostrarInfo que muestre un mensaje con su información utilizando this.

let usuario = {
    nombre: 'Nataly',
    email: 'nataly@proton.me',
    mostrarInfo: function() {
        return (`Hola, soy ${this.nombre} y mi correo electrónico es ${this.email}!`);
    }
};

console.log(usuario.mostrarInfo());