const readlineSync = require('readline-sync');

// Entrada de dados
const A = parseInt(readlineSync.question("Digite o número A: "));
const B = parseInt(readlineSync.question("Digite o número B: "));
const C = parseInt(readlineSync.question("Digite o número C: "));

// Cálculo e comparação
const soma = A + B;
const simbolo = soma > C ? ">" : soma < C ? "<" : "=";

console.log(`\n${A} + ${B} = ${soma} ${simbolo} ${C}`);

if (soma > C) {
  console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
  console.log("A Soma de A + B é Menor do que C");
} else {
  console.log("A Soma de A + B é Igual a C");
}
