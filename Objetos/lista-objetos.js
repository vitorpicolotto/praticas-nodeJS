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

// 8 - Criar um sistema de inspeção, onde cada máquina inspecionada gera automaticamente um relatório de medições com dados de TEMPERATURA, VIBRAÇÃO, PRESSÃO e NÍVEL DE RUÍDO. Informações são organizadas dentro de um objeto, onde cada chave representa uma categoria avaliada e o valor representa o nível na inspeção.
// Exibir as categorias, os valores, percorrer as medições (chave/valor) e imprimir detalhadamente com STATUS (> 50 = alerta; < 50 = ok.)

let medicoes = {
    temperatura: 47,
    vibracao: 29,
    pressao: 33,
    ruido: 94
};

let categorias = Object.keys(medicoes);
let valores = Object.values(medicoes);
let entradas = Object.entries(medicoes);

console.log('Categorias avaliadas:', categorias);
console.log('Valores:', valores);
console.log('\nDetalhes:');

for(let [chave, valor] of entradas){
    let status = valor > 50 ? 'Alerta!!' : 'Ok';
    console.log(`${chave}: ${valor} (${status})`);
}


// 9 - Relatório de manutenção preventiva - cada máquina registra os meses que passou por manutenção e a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade. Criar sistema para gerar um relatório que exiba: total de dias parados, quantidade de meses com manutenção, alerta caso o total de dias parados seja maior que 20 dias

let diasDeManutencao = {
    janeiro: 2,
    fevereiro: 0,
    marco: 9,
    abril: 1,
    maio: 0,
    junho: 0,
    julho: 2,
    agosto: 6,
    setembro: 0,
    outubro: 4,
    novembro: 1,
    dezembro: 0
}

//for...in porque itera diretamente sobre todas as propriedades enumeráveis de um objeto

let totalDeDias = 0;
let mesesComParada = 0;

for (let mes in diasDeManutencao){
    let dias = diasDeManutencao[mes];
    totalDeDias += dias;

    if(dias > 0){
        mesesComParada++;
    }
}

console.log(`Total de dias parados: ${totalDeDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if(totalDeDias > 20){
    console.log('Status: Atenção! Acima do limite anual!');
} else {
    console.log('Status: Dentro do limite anual');
}


// 10 - Analisando desempenho dos estudantes, onde cada curso possui uma lista de estudantes com seus respectivos dados de progresso. Construir um relatório que mostra desempenho geral da turma. 
/*
    Crie um objeto chamado curso, com as seguintes propriedades:
        titulo: string com o nome do curso;
        estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
        Um método interno chamado gerarRelatorio.

    O método gerarRelatorio deve:
        Percorrer o array de estudantes;
        Exibir no console o nome de cada estudante e sua situação:
            Se o progresso for igual ou maior que 70, mostrar "Aprovado";
            Senão, mostrar "Em andamento";
        Ao final, mostrar:
            A quantidade total de estudantes;
            A média geral de progresso da turma.
*/

let curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
  gerarRelatorio: function (){
    let totalProgresso = 0;

    for(let estudante of this.estudantes){
        let situacao = estudante.progresso >= 70 ? 'Aprovado' : 'Em andamento';
        console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
        totalProgresso += estudante.progresso
    }

    let mediaDaTurma = (totalProgresso / this.estudantes.length);
    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${mediaDaTurma}%`);
  }
};

curso.gerarRelatorio();






