//Matriz es una variable que como valor tiene arrays - que guarda varios arrays de elementos
//Una matriz es un array que contiene otros arrays
//formando una estructura con filas y columnas, como una tabla.
//Cada elemento de la matriz puede ser accedido mediante dos índices:
//uno para la fila y otro para la columna.

// Sintaxis
let miMatriz = [[], [], []]; // esta es una matriz con 3 elementos - cada elemento es un array[]

let matriz = [
  [1, 2, 3], // indice 0 - longitud 3
  [4, 5], // indice 1 - longitud 2
];
for (let i = 0; i < matriz.length; i++) {
  // recorre las filas
  for (let j = 0; j < matriz[i].length; j++) {
    // recorre las columnas
    console.log("El numero de la matriz es:" + matriz[i][j]); // muestra cada elemento
  }
}

// Ejemplo para ver índices de filas y columnas
let matrizDeEdades = [
  [20, 45, 22, 50, 13, 12], // i = 0
  [14, 45, 12, 12, 13, 3], // i = 1
  [5, 4, 22, 5, 13, 5], // i = 2
  [9, 73, 12, 5, 8, 31], // i = 3
];
console.log(matrizDeEdades[3]); // va a mostrar el array en el indice 3
console.log(matrizDeEdades[3][5]); // 31
console.log(matrizDeEdades[0][3]); // 50

//Para acceder a los elementos de una matriz, podes usar BUCLE FOR ANIDADO.
//El primer bucle recorre las filas (i)
//y el segundo recorre las columnas dentro de cada fila (j)

// Ejemplo - matriz de 3 x 4
let matrizEjemplo = [
  [1, 2, 3], // i = 0
  [4, 5, 6], // i = 1
  [7, 8, 9, 10], // i = 2
  // 0  1  2   3
];
for (let i = 0; i < matrizEjemplo.length; i++) {
  // recorre las filas
  for (let j = 0; j < matrizEjemplo[i].length; j++) {
    // recorre las columnas
    console.log("Los números de la matrizEjemplo son:" + matrizEjemplo[i][j]); // muestra cada elemento
  }
}
// 1 iteracion = 1 - 2 - 3 (estamos posicionados en i = 0 o sea la primer fila)
// 2 iteracion = 4 - 5 - 6 (estamos posicionados en i = 1 o sea mi segunda fila)
// 3 iteracion = 7 - 8 - 9 - 10 (estamos posicionados en i = 2 o sea mi tercer fila)

// Ejemplo de ppt
// Creamos una matriz 4x5 que representa las butacas del cine
let butacasCine = [
  ["ocupada", "libre", "ocupada", "ocupada", "libre"],
  ["ocupada", "ocupada", "ocupada", "libre", "ocupada"],
  ["ocupada", "ocupada", "ocupada", "ocupada", "libre"],
  ["ocupada", "libre", "ocupada", "ocupada", "ocupada"],
];
// Inicializamos la variable para las butacas libres - por defecto es falso hasta que hagamos la consulta
let libre = false;
// Recorremos la matriz con un bucle for para verificar el estado de las butacas
for (let i = 0; i < butacasCine.length; i++) {
  for (let j = 0; j < butacasCine[i].length; j++) {
    // Si la butaca está libre, cambiamos la variable 'libre' a true
    if (butacasCine[i][j] === "libre") {
      libre = true;
      console.log(
        `La butaca en la fila ${i + 1}, columna ${j + 1} está libre.`
      );
    }
  }
}

// Ejemplo pixel
const corazon = [
  [".", "#", ".", ".", ".", "#", "."],
  ["#", "#", "#", ".", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#", "#"],
  [".", "#", "#", "#", "#", "#", "."],
  [".", ".", "#", "#", "#", ".", "."],
  [".", ".", ".", "#", ".", ".", "."],
];

for (let i = 0; i < corazon.length; i++) {
  let fila = "";
  for (let j = 0; j < corazon[i].length; j++) {
    fila += corazon[i][j] + " ";
  }
  console.log(fila);
}
