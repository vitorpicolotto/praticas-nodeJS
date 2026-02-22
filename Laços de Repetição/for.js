// Execução das tabuadas do 1 até o 10

for (let i = 1; i <= 10; i++){
    console.log(`Tabuada do ${i}:`)
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }

    console.log('----------//-----------')
}

// Gerar números aleatórios entre 1 e 50, interrompendo o laço caso chegue no número 15 ou depois de 30 tentativas.

for(let contador = 1 ; contador <= 30; contador++){
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1) //Math.floor deixa o número inteiro e não arredondado
    console.log(`Tentativa: ${contador} \n Número sorteado: ${numero}`)
    if(numero === 15){
        console.log(`${numero} em ${contador} tentativas.`);
        break;
    }
}

// Numeros aleatórios de 1 a 50, criando um contador que só é incrementado caso os números NÃO sejam divisíveis por 5

let contagem = 0;

for(let k = 1; k <= 15; k++){
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero % 5 === 0){
        continue;
    }
    contagem++;
}

console.log(contagem)