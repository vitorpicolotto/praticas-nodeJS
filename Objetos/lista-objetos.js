// 1 - Criando um objeto. Sistema para loja online. Cada produto é representado por um nome, preço e disponibilidade.

let produto = {
    nome: 'PS5',
    preco: 4000,
    disponivel: true
}

console.log(produto);

// 2 - Acessando dados com pontos e colchetes. Painel de configuração de app. Configs armazenadas em um objeto onde devo acessar informações específicas.

// let configuracao = {
//     tema: ['claro', 'escuro'],
//     idioma: ['pt', 'en', 'it', 'es']
// }

// console.log(`Tema: ${configuracao.tema[1]}`);
// console.log(`Idioma: ${configuracao.idioma[0]}`);

const configuracoes = {
  tema: 'escuro',
  notificacoes: true,
  idioma: 'pt-BR'
};

console.log("Tema:", configuracoes.tema);          
console.log("Idioma:", configuracoes['idioma']);   


// 3 - Arrays dentro de objetos. App de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita tem uma lista de ingredientes armazenada como um array.

let receita = {
    nome: 'Brigadeiro',
    ingredientes: ['Leite condensado', 'Chocolate meio amargo', 'Flor de sal', 'Margarina', 'Cacau em pó'],
    tempoPreparo: 10 //minutos
}

console.log(`Ingrediente complementar para o ${receita.nome}: ${receita.ingredientes[2]}`);

// 4 - Remover uma propriedade. Sistema de locadora de carros. Remover uma das propriedades do objeto.

let carro = {
    marca: 'Renault',
    modelo: 'Twingo',
    ano: 1998,
    km: 202000,
    modeloAntigo: 'Twingo XLS'
}

console.log('Lista completa:', carro);

delete carro.modeloAntigo;
console.log('Lista após remover:', carro);

// 5 - Iterar um array de objetos. Painel de monitoramento de informações de dispositivos conectados à rede. 

let dispositivos = [
    {
        nome: 'iPhone de Thaise',
        status: 'ativo',
    },
    {
        nome: 'motorola de Vitor',
        status: 'inativo',
    },
    {
        nome: 'Alexa',
        status: 'ativo',
    }
];

for (const dispositivo of dispositivos){
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}

// 6 - Métodos dentro de um objeto. Sistema de controle de máquinas, onde cada máquina é um objeto e que possui um método interno que exibe seu status.

let maquina = {
    nome: 'Esteira de Transporte',
    funcionando: true,
    exibirStatus: function exibirStatus(){
        if(this.funcionando){
            console.log(`A máquina ${this.nome} está funcionando.`);  
        } else {
            console.log(`A máquina ${this.nome} não está funcionando.`);
        }
    }
}

maquina.exibirStatus()

// 7 - Montando um objeto a partir de pares chave-valor. Importação de dados para uma empresa, os quais chegam em arrays de pares, onde cada par representa uma chave e seu respectivo valor. Necessário transformar em um objeto estruturado.

//iterar sobre os arrays pares e a cada repetição adicionar uma nova propriedade ao objeto final

function montarObjeto(arrays){
    let objetoFinal = {};

    for(const [chave, valor] of arrays){
        objetoFinal[chave] = valor;
    }
    return objetoFinal;
}

let dadosParaObjeto = [
    ['nome', 'Vitor'],
    ['idade', 31],
    ['cidade', 'Florianópolis']
]

console.log(montarObjeto(dadosParaObjeto));

// 8 - 
