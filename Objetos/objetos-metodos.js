//metodo para calcular a idade da pessoa

const user = {
    nome: 'Aramis Merki II',
    nascimento: '1992-05-18',
    cpf: '11233455678',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};


user.calculaIdade = function calculaIdade(){
    const anoNasc = parseInt(this.nascimento.slice(0, 4)); //obtém o parâmetro do ano pertencente a string. utiliza o slice + posição na string, similar ao posicionamento de array.
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`a idade é de ${idade} anos`);
}
user.calculaIdade();

// Metodos de Objetos
//acessar o array de objetos e imprimir no terminal os nomes e os status de ativação de cada um.

const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
];

for (const cliente of clientes){
    const status = cliente.ativo ? 'ativo' : 'inativo';
    console.log(`Status do cliente ${cliente.nome}: ${status}`);
}

