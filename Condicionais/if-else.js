// Soma ou multiplicação

let num1 = 2;
let num2 = 4;

const operacao = 'soma';


if(operacao === 'soma'){
    console.log('Resultado da soma = ', num1 + num2)
} else if (operacao === 'multiplicacao') {
    console.log('Resultado da multiplicação = ', num1 * num2)
} else {
    console.log('Operação não identificada')
}


//Nível de bonus de acordo com a faixa salarial 
/*
    R$11.000 ou maior - 3% de bonus;
    R$7.000 a 10.999 - 5% de bonus;
    R$4.000 a 6.999 - 7% de bonus;
    R$2.000 a 3.999 - 9% de bonus.
*/

let salario = 4500;

if(salario >= 11000){
    console.log('Seu bônus é de 3%');
    console.log('Seu novo salário é: R$', (salario + (salario * 0.03)))
} else if (salario >= 7000 && salario < 11000){
    console.log('Seu bônus é de 5%');
    console.log('Seu novo salário é: R$', (salario + (salario * 0.05)))
} else if (salario >= 4000 && salario < 7000) {
    console.log('Seu bônus é de 7%');
    console.log('Seu novo salário é: R$', (salario + (salario * 0.07)))
} else {
    console.log('Seu bônus é de 9%');
    console.log('Seu novo salário é: R$', (salario + (salario * 0.09)))
}
