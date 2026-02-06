/*
    Verificar se o estudante receberá bonus na nota
    Recebe se a nota for maior ou igual a 8 e se tiver no máximo duas faltas
*/

let nome = 'Vitor';
let nota = 9;
let faltas = 2;

// Ternário/Condicional

const recebeBonus = (nota >= 8) && (faltas <= 2) 
    ? `${nome} recebe bônus na nota` 
    : `${nome} não recebe bônus na nota`

console.log(recebeBonus)


/*
    Identificar o tipo de usuário e comunicar o tipo de acesso
    - Usuário free: acesso limitado
    - Usuário premium: acesso a todas funções
    - Usuário super premium: acesso total e bônus especiais
*/

// Switch/Case

let usuario = 'Free'

switch(usuario) {
    case 'Free': 
        console.log('Acesso limitado');
    break;

    case 'Premium':
        console.log('Acesso total');
    break;

    case 'Super Premium':
        console.log('Acesso total + bônus');
    break;

    default:
        console.log('Usuário não identificado');
    break;
}

