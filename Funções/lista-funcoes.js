// 1 - Exibir mensagem de saudação para um usuário. Se o nome for ausente, criar uma saudação genérica.

function saudacao(nome){
    if (nome){
        console.log(`Olá, ${nome}!`)
    } else {
        console.log('Olá, visitante!')
    }
}

saudacao('Vitor');
saudacao();

// 2 - Criar função que aplica um desconto com base no valor original e calcula o novo valor

function calculaDesconto(valorOriginal, desconto){
    let totalComDesconto = valorOriginal - (valorOriginal * (desconto/100));
    return totalComDesconto;
}

console.log(calculaDesconto(100, 10))