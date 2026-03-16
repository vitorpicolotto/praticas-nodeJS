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

// 3 - Calcular a média aritmética de um aluno utilizando uma arrow function

let calculaMedia = (nota1, nota2) => {
    let mediaAritmetica = (nota1 + nota2) / 2;
    return mediaAritmetica;
}


console.log('Sua nota média é = ', calculaMedia(10,8))

// 4 - Sistema de quiz que mostra se o número digitado é par ou é impar - com a lógica encapsulada em uma arrow function

let verificarParidade = (valorNumero) => {
    if (valorNumero % 2 === 0){
        console.log('Número par')
    } else {
        console.log('Número impar')
    }
}

verificarParidade(6);
verificarParidade(7);

// 5 - Criar uma função que envie uma mensagem personalizada para o usuário após o processamento do pedido, de acordo com o tipo de cliente. A função deve receber três parâmetros: nome, tipo de cliente (vip, novo ou comum), e a função callback

function mensagemPersonalizada(nome, nivelCliente){
    if(nivelCliente === 'vip'){
        console.log(`Agradecemos a sua preferência, ${nome}! Você ganhou frete grátis!!`)
    } else if (nivelCliente === 'novo'){
        console.log(`Seja bem-vindo ao sistema, ${nome}! Aproveite seu cupom de adesão!!`);
    } else {
        console.log(`Obrigado por comprar com a gente, ${nome}!`);
    }
}

function processaPedido(nome, nivelCliente, callback){
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, nivelCliente);
}

processaPedido('Vitor', 'vip', mensagemPersonalizada);
processaPedido('Renato', 'novo', mensagemPersonalizada);
processaPedido('André', 'comum', mensagemPersonalizada);
