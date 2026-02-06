/*
    Exercício 1
    Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.
*/

let idade = 18;

if (idade >= 18) {
    console.log('Entrada permitida!');
} else {
    console.log('Entrada negada!');
}

/*
    Exercício 2
    Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:
    - Menor que 15: "Frio"
    - De 15 a 25: "Agradável"
    - Acima de 25: "Quente"
    Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.
*/

let temperatura = 12;

if (temperatura > 25){
    console.log('Quente');
} else if (temperatura >= 15 && temperatura <= 25){
    console.log('Agradável');
} else {
    console.log('Frio');
}

/*
    Exercicio 3
    Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:
    - Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
    - Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
    - Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".
    Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.
*/

let idadeEscolar = 35;

let classificacao = idadeEscolar >= 18 
    ? 'Adulto' 
    : idadeEscolar >= 12 && idadeEscolar < 18 
    ? 'Juvenil' 
    : 'Infantil'
console.log(classificacao)

/*
    Exercicio 4
    Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

    Crie um programa que, dado o dia da semana em formato numérico:
0: Domingo
1: Segunda-feira
2: Terça-feira
3: Quarta-feira
4: Quinta-feira
5: Sexta-feira
6: Sábado
    Verifique se a loja está aberta e qual o horário de funcionamento.

    Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
    Nos outros dias, a loja estará aberta no horário normal.
*/

let diaDaSemana = 9;

switch (diaDaSemana) {
    case 1:
    console.log("Segunda-feira - Aberta das 9h às 18h");
    break;

    case 2:
    console.log("Terça-feira - Aberta das 9h às 18h");
    break;

    case 3:
    console.log("Quarta-feira - Aberta das 9h às 18h");
    break;

    case 4:
    console.log("Quinta-feira - Aberta das 9h às 18h");
    break;

    case 5:
    console.log("Sexta-feira - Aberta das 9h às 18h");
    break;

    case 6:
    console.log("Sábado - Aberta das 10h às 14h");
    break;

    case 0:
    console.log("Domingo - Aberta das 10h às 14h");
    break;

    default:
    console.log("Não estamos abertos")
    break;
}

/*
    Exercicio 5
    Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."
*/

let user = 'admin';

let login = user === 'admin' ? 'Login bem-sucedido' : 'Usuário inválido'
console.log(login)

/*
    Exercício 6
    Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo de preparo de sucos. O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo esperado, de acordo com uma receita.

    - O suco pode ser feito somente com "laranja" ou "abacaxi".
    - Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.
    
    Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita.
*/

let fruta = 'morango';

if(fruta === 'laranja' || fruta === 'abacaxi'){
    console.log(`O suco pode ser feito com a fruta ${fruta}`)
} else {
    console.log(`O suco não pode ser feito com a fruta ${fruta}, apenas com Laranja ou Abacaxi`)
}

/*
    Exercício 7
    Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

    Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."
*/

let carrinhoVazio = false;

if(carrinhoVazio){ //true
    console.log('Não é possível finalizar sua compra: carrinho vazio')
} else {
    console.log('Compra finalizada com sucesso')
}

/*
    Exercício 8
    Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

    - Se o status for "pendente", exibe: "Pagamento pendente".
    - Se o status for "aprovado", exibe: "Pagamento aprovado".
    - Se o status for "recusado", exibe: "Pagamento recusado".
*/

let statusPagamento = 'Recusado';

switch(statusPagamento){
    case 'Pendente':
        console.log('Pagamento pendente');
        break;
    case 'Aprovado':
        console.log('Pagamento aprovado')
        break;
    case 'Recusado':
        console.log('Pagamento recusado');
        break;
    default:
        console.log('Status inválido');
        break;
}

/*
    Exercício 9
    Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

    - O personagem precisa ter mais de 50 pontos.
    - O personagem deve ter pelo menos uma vida restante.

    Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.
*/

let pontos = 12;
let vidaRestante = 12;

if(pontos > 50 && vidaRestante > 1){
    console.log('Pode avançar para o próximo nível')
} else{
    console.log('Não pode avançar. Requisitos: Mais de 50 pontos e mais de uma vida restante');
    if(pontos <= 50 && vidaRestante <= 1){
        console.log('Você precisa de mais vida e mais pontos.')
    } else if (vidaRestante <= 1){
        console.log('Você tem apenas uma vida ou menos. Consiga mais para passar de nível.')
    } else {
        console.log('Você tem menos de 50 pontos. Obtenha mais para passar de nível.')
    }
}

/*
    Exercício 10
    Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

    - "Crítica": se a bateria estiver abaixo de 20%
    - "Moderada": se estiver entre 20% e 80%
    - "Cheia": se estiver acima de 80%
*/

let nivelBateria = 10;

let statusBateria = nivelBateria === 100
? 'Completa'
: (nivelBateria > 80 && nivelBateria < 100) 
? 'Cheia' 
: (nivelBateria >= 20 && nivelBateria <= 80)
? 'Moderada'
: 'Crítica'

console.log(statusBateria)
