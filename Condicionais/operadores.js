// Verificar se um ano é bissexto

/*
    Um ano é bissexto (366 dias) se:
    - é divisível por 4 mas não é divisível por 100
    OU
    - é divisível por 100 e por 400

*/

let ano = 2002;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)){
    console.log(`${ano} é bissexto`)
} else {
    console.log(`${ano} não é bissexto`)
}