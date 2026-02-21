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