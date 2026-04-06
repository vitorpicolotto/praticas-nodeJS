//criar um array com uma sequencia de numeros entre x e y


        //numeros de 12 a 30
function criaArrNum(inicio, fim){
    const arr = [];
    let elemento = inicio;

    for(let i=0, j=0; j< fim; i++, elemento++ ){
        arr[i] = elemento;
        j=elemento;
    }

    return arr;

}


console.log(criaArrNum(12,30));




