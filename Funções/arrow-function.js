// Criar uma função de cálculo de juros compostos. Deve receber valores inteiros: valor, % e tempo
// Fórmula JC = valor (juros ^ tempo)

let calculaJurosCompostos = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}

console.log(calculaJurosCompostos(1000, 5, 2))