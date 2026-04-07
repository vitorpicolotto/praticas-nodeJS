const pessoa = {
    nome: 'Renato Botteon',
    nascimento: '1991-03-22',
    cpf: '12345678900',
    pontuacao: 6951,
    trofeus: ['speedrunner', 'indie']
};

console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

//excluir propriedade
delete pessoa.cpf;
console.log(pessoa);

//iterar trofeus

function exibeTrofeus(listaTrofeus){
    for (const trofeu of listaTrofeus){
        console.log(`Trofeu disponível: ${trofeu}`)
    }
}

exibeTrofeus(pessoa.trofeus);


