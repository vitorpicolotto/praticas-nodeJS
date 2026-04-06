// 1 - Criar uma lista de compras onde o usuário possa acessar e alterar os itens. Criar os itens iniciais, acessar e exibir o segundo item, modificar o último item para um novo valor.

let listaDeCompras = ['desodorante', 'iogurte', 'cerveja', 'carne', 'vassoura'];
console.log(`O segundo item da minha lista é: ${listaDeCompras[1]}!`)
listaDeCompras[listaDeCompras.length - 1] = 'linguiça'
console.log('Minha nova lista de compras: ', listaDeCompras);

// 2 - Sistema de gastos mensais. Somar todos os valores do array para saber os gastos mensais usando um for.

let despesas = [150, 300, 50, 123, 1500, 70];
let gastoMensal = 0;

for (let i = 0; i < despesas.length; i++){
    gastoMensal += despesas[i];
}

console.log(`Meus gastos mensais foram: R$${gastoMensal}`);


// 3 - Criar um painel de sistema de chamada. Exibir um a um dos estudantes usando for...of.

let estudantes = ['Vitor', 'Thaise', 'Renato', 'Gelson', 'Edilton', 'Josué'];

for (let estudante of estudantes){
    console.log('Estudante: ', estudante);
}

// 4 - Sistema de envio de notificações. A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no console. Criar o array com a lista de mensagens e usar forEach para exibir uma mensagem no console para cada item

let mensagens = ['Pedido confirmado', 'Pedido negado', 'Pedido enviado'];

mensagens.forEach(mensagem => {
    console.log('Notificação nova: ', mensagem);
})

// 5 - Sistema de tarefas do dia a dia. Criar um array com 3 tarefas, add tarefa nova no final da lista, remover ultima tarefa da lista, exibir a lista após cada ação.

let tarefas = ['Banho', 'Café da Manhã', 'Videogame'];
console.log('Minhas tarefas iniciais são: ', tarefas);

tarefas.push('Cozinhar');
console.log('Tarefas após adicionar: ', tarefas);

tarefas.pop();
console.log('Tarefas após remover: ', tarefas);


// 6 - Clonagem de arrays em um sistema de pedidos online.  Criar array com pedidos, fazer a copia, adicionar um item à cópia, exibir os dois arrays.

let pedidos = ['PS5', 'Dualsense', 'Resident Evil 9'];
let pedidoNovo = pedidos.slice();
pedidoNovo.push('Death Stranding 2');

console.log('Pedido original', pedidos);
console.log('Pedido copiado e novo', pedidoNovo);

// 7 - Sistema de busca de biblioteca digital. Criar a lista e quando o usuário digitar um livro, deve informar se tem na lista ou não.

let livros = ['100 anos de solidão', '1Q84', 'Harry Potter', 'O Senhor dos Aneis', 'Deserto dos Tártaros'];
let livroBuscado = 'Pequeno Principe'

            //indexOf() é usado para procurar um valor dentro de um array. Se o valor for encontrado, ele retorna a posição (índice) onde o item está. Se não for encontrado, retorna -1.

if(livros.indexOf(livroBuscado) !== -1){
    console.log(`O livro '${livroBuscado}' está disponível!`);
} else {
    console.log(`O livro '${livroBuscado}' NÃO está disponível!`);
}

// 8 - Sistema de pagamentos com desconto. Criar um array com os valores, usar map() para aplicar 10% e exibir o novo array com desconto aplicado.

            // O método map() é utilizado para criar um novo array com base em alguma transformação feita em cada item do array original. Ele percorre todos os elementos do array e aplica uma função callback para modificar cada um deles.

let precos = [100, 80, 50, 120];
console.log('Preços originais: ', precos)

let precosComDesconto = precos.map(preco => preco * 0.9);
console.log('Preços com desconto: ', precosComDesconto)


// 9 - Sistema de controle de acesso usando filter(). Cada participante fornece nome e idade, mas apenas 18+ podem entrar. Exibir quem tem acesso liberado. Criar um array, usar o método filter() para selecionar quem pode entrar e exibir mensagem de autorização, usar map() para criar um novo array com apenas os autorizados, exibir a lista final.

let participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

let autorizados = participantes.filter(p => {
    p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
    return p.idade >= 18;
})

let aprovados = autorizados.map(p => p.nome);
console.log('Lista de aprovados: ', aprovados);

// 10 - Painel de vendas de uma empresa para fornecer uma visão clara de quais produtos vendem bem, quanto cada um arrecadou e qual gerou mais lucro.
//Mostrar todos os produtos, filtrar os que venderam bem (+ 100 unidades) e exibir seus nomes, calcular o total de venda de cada produto, descobrir o mais lucrativo.

let produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

        // forEach para criar um 'relatório', já que não precisa retornar os dados.

let relatorio = '';
let produtoMaisVendido = '';
let totalPorProduto = '';

let maisLucrativo = { nome: '', totalVendas: 0};

produtos.forEach(produto => {
    let totalVendidoProduto = produto.preco * produto.quantidadeVendida;

    relatorio += `Produto: ${produto.nome} | Preço: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}\n`;

    if(produto.quantidadeVendida > 100){
        produtoMaisVendido += `${produto.nome} \n`;
    }

    totalPorProduto += `${produto.nome}: R$${totalVendidoProduto}\n`;

    if(totalVendidoProduto > maisLucrativo.totalVendas) {
        maisLucrativo.nome = produto.nome;
        maisLucrativo.totalVendas = totalVendidoProduto;
    }

})

console.log('Relatório de produtos vendidos:'); 
 
console.log(relatorio); 
 
console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
 
console.log(produtoMaisVendido); 
 
console.log('Total de vendas por produto:'); 
 
console.log(totalPorProduto); 
 
console.log('Produto mais lucrativo:'); 
 
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);
