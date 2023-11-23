function calcularFatorVencimento(dataVencimento) {
  const dataBaseAntiga = new Date('1997-10-07');
  const dataBaseNova = new Date('2025-02-22');

  const milissegundosPorDia = 24 * 60 * 60 * 1000;
  const dataVencimentoEmMilissegundos = new Date(dataVencimento).getTime();

  if (dataVencimentoEmMilissegundos < dataBaseNova.getTime()) {
    // Calcular fator de vencimento para datas antes da nova data base
    const diferencaEmDias = Math.floor((dataVencimentoEmMilissegundos - dataBaseAntiga.getTime()) / milissegundosPorDia);
    return diferencaEmDias;
  } else {
    // Calcular fator de vencimento para datas a partir da nova data base
    const diferencaEmDias = Math.floor((dataVencimentoEmMilissegundos - dataBaseNova.getTime()) / milissegundosPorDia);
    return Math.max(1000, diferencaEmDias + 1000);
  }
}

// Exemplos de uso
const fator1 = calcularFatorVencimento('2000-12-06'); // Exemplo antes da nova data base
console.log(fator1); // Deve imprimir 1156

const fator2 = calcularFatorVencimento('2025-02-23'); // Exemplo após a nova data base
console.log(fator2); // Deve imprimir 1001
