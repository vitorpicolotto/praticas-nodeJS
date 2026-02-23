// Gerar uma função que calcula o fatorial de um número usando recursão

const fatorial = function f(num){
    if (num === 0 || num === 1) return 1;
    return num * f(num -1);
}

console.log(fatorial(5));

