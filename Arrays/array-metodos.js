//clonar um array multidimensional com deep copy

const arr1 = [[1,2], 2, 3];

// const arr2 = arr1;
// arr1[0] = 1;

// console.log(arr1);
// console.log(arr2);
//não duplicou o array, não ocupam mesmo lugar da memória

const copiaArray = (arr) => {
    const copia = [];

    arr.forEach((elemento) =>{
        if(Array.isArray(elemento)){
            copia.push(copiaArray(elemento));
        } else{
            copia.push(elemento);
        }
    })

    return copia;
}

const arr3 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr3);


// filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

//const result = cpf.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString())

const result = cpfs.map(cpf => {
    if(typeof cpf === 'string'){
        return cpf;
    } else {
        return cpf.toString();
    }
})

console.log(result);


