// criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
//deve receber por parâmetro: operação desejada, valor1, valor2

function soma(num1, num2){
    return num1 + num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}

function calcula(funcOperacao, valor1, valor2){
    return funcOperacao(valor1, valor2)
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplicacao, 5, 5));


//criar uma função que emita uma mensagem caso o usuário x não esteja interagindo com o sistema após y tempo

const userId = '4545656';
const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);

setTimeout(avisaUsuario, 2000, userId); //em milisegundos
setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);


