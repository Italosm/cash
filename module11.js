function calcularDigitoVerificadorOnze(numero) {
  const numeroString = numero.toString();

  let soma = 0;
  let multiplicador = 2;

  for (let i = numeroString.length - 1; i >= 0; i--) {
    let digito = parseInt(numeroString[i], 10);

    soma += digito * multiplicador;

    multiplicador = multiplicador < 9 ? multiplicador + 1 : 2;
  }

  const digitoControle = (soma * 10) % 11;

  return digitoControle === 0 || digitoControle === 1 || digitoControle === 10 ? 1 : digitoControle;
}

const numero0 = "0339938900000185009869859700000057782390101";
const digitoControle0 = calcularDigitoVerificadorOnze(numero0);

console.log(`Número: ${numero0}`);
console.log(`Dígito de Controle: ${digitoControle0}`);
