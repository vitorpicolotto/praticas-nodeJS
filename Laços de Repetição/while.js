// Gerar um loop para adivinhar um numero de 1 a 50, contando a quantidade de tentativas até o resultado

const numeroSecreto = 8;
let numeroAleatorio = 0;
let contadorTentativas = 0;


while (numeroSecreto !== numeroAleatorio){
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    contadorTentativas++;
}

console.log(`Adivinhou em ${contadorTentativas} tentativas`);


// Laço para gerar um numero aleatorio de 1 a 50, executando-o enquanto não gerar um número par

let numeroRandomizado = 0

do {
    numeroRandomizado = Math.floor(Math.random() * (50 - 1 + 1) + 1);
} while (numeroRandomizado % 2 !== 0)

console.log(numeroRandomizado)


// criar um laço que recebe um texto e verifica se é um palindromo, imprimindo no console o texto e informando se é ou não é

//const texto = 'alura';
const texto = 'arara';
//const texto = 'luz azul'; // não é porque tem o espaço no meio

let textoInvertido = ''

for(let i=texto.length - 1; i >= 0; i--){
    textoInvertido += texto[i]
}

const result = texto === textoInvertido 
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`

console.log(result)

