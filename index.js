// este archivo solo lo creamos para para chequear que funcione la instalcion de node y prompt-sync
const prompt = require("prompt-sync")();

const nombre = prompt("¿Cómo te llamas? ");
console.log(`Hola, ${nombre}!`);
