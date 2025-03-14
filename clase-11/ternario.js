// IF TERNARIO - Linea de codigo resumida para hacer evaluaciones 
// (condicion) ? accion : otra accion

// condicion ? primera expresion : segunda expresion
// Si la condicion es verdadera => muestro la primera expresion
// Sino - si la condicion es falsa => entonces muestro la segunda expresion

// con un IF/ELSE 
const edad = 15;
if(edad >= 18){
    console.log("Puede votar")
    }else{
        console.log("No puede votar")
    }
// con el ternario es el codigo es mas resumido y mas facil de leer
const tieneLicencia = edad >= 18 ? "Tiene licencia" : "No tiene licencia";
console.log(tieneLicencia);

// 🎯Truquito genial del ternario, porque te permite evaluar varias condiciones sin usar if-else.
// Se llama "TERNARIO ANIDADO"
// ❌ Aunque no siempre es recomendable (porque puede volverse difícil de leer), en casos simples como este es súper útil.

const nuevaEdad = 15;
const puedeVotar =
  nuevaEdad >= 18
    ? "Puede votar"
    : nuevaEdad >= 16
    ? "Debe inscribirse para votar"
    : "No puede votar";
console.log(puedeVotar);

if(nuevaEdad >= 18){
    console.log("Puede votar") 
}else if(nuevaEdad >= 16){
    console.log("Debe inscribirse para votar") 
}else{
    console.log("No puede votar")
}



