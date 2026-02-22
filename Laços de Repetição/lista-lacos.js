// 1    Exibir a sequencia numerica até o valor da constante. Mostrar todos os numeros a partir de 1 até o valor final, de forma ordenada e crescente.

const numeroFinal = 8

for(let i = 1; i <= numeroFinal; i++){
    console.log(`Numero: ${i}`)
}

// 2    Identificar todos os números pares dentro de um intervalo informado. Saber quais os múltiplos de 2. Criar um sistema que mostre os números pares de 1 até o final.

const numeroParFinal = 20

for (let i = 1; i <= numeroParFinal; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


// 3     Mostrar todos os caracteres digitados de uma senha um por um

const senha = 'ol@Mund0!'

for (let i=0; i < senha.length; i++){
    console.log(`Caractere ${i + 1}: ${senha[i]}`)
}


// 4    Sistema de cadastro para cadastrar quantos nomes quiser. Processo continua até encontrar a string 'fim'. Exibir cada um dos nomes e encerra somente quando encontrar o fim.

const nomes = ['André', 'Renato', 'Jefferson', 'Carlos', 'Edilton', 'fim', 'Vitor', 'Gelson'];
let i = 0;

while (nomes[i] !== 'fim' ){
    console.log(nomes[i]);
    i++;
}


// 5    Sistema de segurança onde o número 10 deve ser evitado. Exibir o contador de números e encerrar quando o número é 10 (com mensagem de alerta)

for (let i = 1; i <= 20; i++){
    console.log(`Acesso permitido! Número: ${i}`)
    if(i === 10){
        console.log('Número proibido encontrado! Encerrando...');
        break;
    }
}


// 6    App de finanças pessoais, para simular o quanto a pessoa economizaria em um período. Inicia em R$1,00 e somando +R$1,00 por dia (1, 1+2, 3+3, 6+4, 10+5...), economizando R$1 a mais que no dia anterior. Simular o quanto economiza em 10 dias (R$55)

const totalDeDias = 10;
let economia = 0;
let dia = 1;

do {
    economia += dia;
    dia++;
    console.log(`Valor economizado no dia ${dia -1}: R$${economia}`)
} while (dia <= totalDeDias);

console.log(`Total economizado: R$${economia}`);



// 7    Progamar um temporizador para secagem de produtos. Necessário manter a esteira de secagem por pelo menos 5s, mesmo que a temperatura ideal já tenha sido atingida.
    // 'Aquecendo... segundo X'; 'Temperatura ideal atingida' no segundo que a condição for alcançada e o total de segundos que o sistema ficou ligado

const tempoMinimo = 5;
const temperaturaIdealAlcançadaEm = 3;
let tempo = 0;

do {
    tempo++;
    console.log(`Aquecendo... Tempo: ${tempo} segundos`);

    if(tempo === temperaturaIdealAlcançadaEm) {
        console.log('Temperatura ideal alcançada!')
    }

} while (tempo < tempoMinimo);

console.log(`Tempo total de aquecimento: ${tempo} segundos`)


// 8    Automatizar o painel de uma linha de empacotamento em um centro de distribuição. A cada ciclo, uma nova caixa é processada. A linha só pode processar no máximo 5 caixas VÁLIDAS por vez. Caixas com número de identificação NEGATIVOS (não válidos) precisam ser ignoradas, pois são danificadas. O programa deve parar quando 5 caixas válidas forem processadas.

const caixas = [12, -1, 8, 0, -5, 3, 7, 14, 35, 9];
let caixasProcessadas = 0;

for (let i = 0; i < caixas.length; i++) {
    if(caixas[i] >= 0) {
        caixasProcessadas++;
        console.log(`Caixa processada: ${caixas[i]}`)
    } else {
        console.log('Caixa danificada: ignorada!')
    }
    
    if (caixasProcessadas === 5){
        console.log('Limite de caixas processadas atingido!');
        break
    }
}


// 9    Sistema de login, que precisa permitir que o usuário tente digitar sua senha corretamente até 3x. Se digitar certo, mensagem de acesso permitido. Se errar 3x, bloqueia.

const tentativas = ["1234", "admin", "teste", "secreto"];
const senhaCorreta = "secreto";
let numeroTentativas = 0;

while (numeroTentativas < tentativas.length && numeroTentativas < 3){
    if(tentativas[numeroTentativas] === senhaCorreta){
        console.log('Acesso permitido!');
        break
    } else {
        console.log(`Acesso negado. Tentativa ${numeroTentativas + 1} inválida`)
    }

    numeroTentativas++

    if(numeroTentativas == 3){
        console.log('Acesso bloqueado!');
        break;
    }
}




