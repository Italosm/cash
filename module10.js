function calcularDigitoVerificadorDez(numero) {
  const numeroString = numero.toString();

  let soma = 0;
  let multiplicador = 2;

  for (let i = numeroString.length - 1; i >= 0; i--) {
    let digito = parseInt(numeroString[i], 10);


    let resultado = digito * multiplicador;

    if (resultado > 9) {
      // Se o resultado for maior que 9, soma os dígitos
      resultado = Math.floor(resultado / 10) + resultado % 10;
    }

    soma += resultado;
    multiplicador = multiplicador === 2 ? 1 : 2;
  }

  const resto = soma % 10;
  const digitoVerificador = resto === 0 ? 0 : (10 - resto);

  return digitoVerificador;
}


// Exemplo de uso para "033990282"
const numero0 = 033990282;
const digitoVerificador0 = calcularDigitoVerificadorDez(numero0);

console.log(`Número: ${numero0}`);
console.log(`Dígito Verificador: ${digitoVerificador0}`);

// Exemplo de uso para "335666124"
const numero1 = 335666124;
const digitoVerificador1 = calcularDigitoVerificadorDez(numero1);

console.log(`Número: ${numero1}`);
console.log(`Dígito Verificador: ${digitoVerificador1}`);

// Exemplo de uso para "5780000101"
const numero2 = 5780000101;
const digitoVerificador2 = calcularDigitoVerificadorDez(numero2);

console.log(`Número: ${numero2}`);
console.log(`Dígito Verificador: ${digitoVerificador2}`);

// Exemplo de uso para "5780020101"
const numero3 = 5780020101;
const digitoVerificador3 = calcularDigitoVerificadorDez(numero3);

console.log(`Número: ${numero3}`);
console.log(`Dígito Verificador: ${digitoVerificador3}`);


