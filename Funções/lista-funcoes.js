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


// 6 - Interface de atendimento online onde o sistema precisa simular que está pensando ou processando resposta, e só depois exibir a resposta final. Função responderUsuario (nome, callback após 3s)


function mostraResposta(nome){
    console.log(`Olá, ${nome}! Aqui está sua resposta: o Coritiba é sim o maior time do estado do Paraná`);
}

function respondeUsuario(nomeUsuario, callbackResposta){
    console.log(`Processando sua pergunta, ${nomeUsuario}...`)
    setTimeout(()=> {
        callbackResposta(nomeUsuario)
    }, 3000)
}

respondeUsuario('Thaise', mostraResposta)


// 7 - Sistema de avaliação com base na pontuação final. Criar função de avaliar desempenho com dois parâmetros (pontuação final e callback para exibir mensagem personalizada com base na avaliação)

function avaliaDesempenho(nota, callback){
    let status = ""
    if(nota >= 70){
        status = 'aprovado'
    } else if (nota <= 69 && nota >= 50){
        status = 'reforco'
    } else {
        status = 'reprovado'
    }

    callback(nota, status);
}


function escreveMensagem(nota, status){
    console.log(`Pontuação: ${nota}`)

    if(status === 'aprovado'){
        console.log('Parabéns, você foi aprovado!');
    } else if (status === 'reforco'){
        console.log('Você precisa de reforço!!');
    } else {
        console.log('Você está reprovado!')
    }
}

avaliaDesempenho(90, escreveMensagem);
avaliaDesempenho(60, escreveMensagem);
avaliaDesempenho(30, escreveMensagem);


// 8 - Sistema de consumo de energia elétrica. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.
// três funções: calculaConsumo(potencia, horasPorDia); classificarConsumo(consumo); exibirResumo(nomeAparelho, consumo, classificacao)

function calculaConsumo(potencia, horasPorDia){
    return (potencia * horasPorDia * 30)/100;
}

function classificaConsumo(consumo){
    if (consumo < 50){
        return 'consumo BAIXO'
    } else if (consumo < 200){
        return 'consumo MODERADO'
    } else {
        return 'consumo ALTO'
    }
}

function exibeResumo(nomeAparelho, consumo, classificacao){
    console.log(`${nomeAparelho} consome um total de ${consumo}kWh/mês e é classificado como um aparelho de ${classificacao}`);
    
}

let consumo = calculaConsumo(200, 8);
let nomeAparelho = 'Ar Condicionado';
let classificacao = classificaConsumo(consumo);

exibeResumo(nomeAparelho, consumo, classificacao)


// 9 - Sistema de sorteio interativo, com base no nome e pontuação do usuário. É necessário: a - sortear aleatoriamente um nome na lista de participante, exibir esse nome com certo delay, avaliar se foi premiado ou não com base em uma pontuação (> 80, 50 e 80,  < 50).
// Função para sortear aleatoriamente; função para exibir o nome com atraso; função de avaliar a pontuação; função que organiza o algoritmo em ordem.


const sortearParticipante = (lista) => {
    let indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};

const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};

function realizarSorteio(lista){
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}

let participantes = [
    {nome: 'Vitor', pontuacao: 99},
    {nome: 'Thaise', pontuacao: 80},
    {nome: 'Gelson', pontuacao: 20},
    {nome: 'André', pontuacao: 12},
    {nome: 'Silvia', pontuacao: 79},
];

realizarSorteio(participantes);

// 10 - Função de contagem regressiva que: receba um numero inteiro positivo , imprima o número, quando chega em 0 dá uma mensagem - RECURSIVA E SEM LOOPS!!!!

function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Lançamento!");
  }
}
 
contagemRegressiva(5);

