// nos propone otra forma evaluar de evaluar expresiones
// cuando usarla? cuando sabemos que la expresion es exactamente igual al valor

// SINTAXIS
// switch (expresion) {
//   case valor:
// aca ponemos el codigo a ejecutar
//     break;
//   case otroValor:
// aca ponemos el codigo a ejecutar
//     break;
//     deafault; // como posibilidad de que ninguno de los casos sea verdadero
// }

const dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("¡Ánimo, empieza la semana!");
    break;
  case "viernes":
    console.log("¡Viernes, casi fin de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("¡Es fin de semana!");
    break;
  default:
    console.log("Es un día normal.");
}

// Como tendriamos que hacer para que agrupe los días laborales juntos y los del fin de semana en otro grupo?
switch (dia) {
  // case "lunes":
  // case "martes":
  // case "miercoles":
  // case "jueves":
  // case "viernes":
  //   console.log("Es dia laboral");
  //   break;

  // podriamos poner un caso para cada dia
  // pero para simplificar usamos directamente el default

  case "sabado":
  case "domingo":
    console.log("Es fin de semana");
    break;
  default:
    console.log("Es dia laboral");
}

const nota = 7;
switch (true) {
  case nota >= 9:
    console.log("Excelente");
    break;
  case nota >= 7:
    console.log("Bien");
    break;
  case nota >= 5:
    console.log("Aprobado");
    break;
  default:
    console.log("Reprobado");
}


