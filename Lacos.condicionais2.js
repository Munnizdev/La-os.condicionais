const readlineSync = require('readline-sync');

// Entrada de dados
let numero = parseFloat(readlineSync.question("Digite um número real: "));

// Verificações
let parOuImpar = (numero % 2 === 0) ? "par" : "ímpar"; // Funciona apenas para inteiros
let positivoOuNegativo = (numero >= 0) ? "positivo" : "negativo";

// Saída
console.log(`O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}!`);
