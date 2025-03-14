// en operadores logicos - al final tenemos definicion y ejemplos
// aca les doy un ejemplo de un uso mas "real" en desarrollo
// TENGAN EN CUENTA QUE SON SOLO EJEMPLOS DE USO - AUN NO VIMOS ESTOS TEMAS

// es especialmente útil cuando están trabajando con datos que pueden venir vacíos o faltantes, como:
// Formularios
// Respuestas de una API

// Ejemplo
let datosUsuario = {
    nombre: "Ana",
    edad: 0,
    direccion: null,
  };
  
  console.log(datosUsuario.nombre ?? "Sin nombre"); // 'Ana'
  console.log(datosUsuario.edad ?? "Edad no ingresada"); // 0
  console.log(datosUsuario.direccion ?? "Sin dirección"); // 'Sin dirección'
  
  let descuento = null;
  let descuentoFinal = descuento ?? 10; // Completar con ?? para que sea 10 si es null
  console.log(descuentoFinal); // 10
  
  let cantidad = 0;
  let cantidadFinal = cantidad ?? 5; // Completar con ?? para que respete el 0
  console.log(cantidadFinal); // 0