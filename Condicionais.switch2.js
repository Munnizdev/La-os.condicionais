const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const cargos = {
  1: ["Gerente", 0.10],
  2: ["Vendedor", 0.07],
  3: ["Supervisor", 0.09],
  4: ["Motorista", 0.06],
  5: ["Estoquista", 0.05],
  6: ["Técnico de TI", 0.08]
};

readline.question("Nome do colaborador: ", (nome) => {
  readline.question("Código do cargo (1 a 6): ", (codigo) => {
    readline.question("Salário: R$ ", (salario) => {
      const cargo = cargos[parseInt(codigo)];
      
      if (!cargo) {
        console.log("Código de cargo inválido.");
      } else {
        const novoSalario = parseFloat(salario) * (1 + cargo[1]);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: ${cargo[0]}`);
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
      }

      readline.close();
    });
  });
});