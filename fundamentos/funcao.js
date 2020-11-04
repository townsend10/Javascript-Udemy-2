
//console.log(typeof Object)

//class Produto {}

//console.log(typeof Produto)

//funcao sem retorno

function imprimirSoma(a,b){
    console.log (a + b)
}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,13,1,3)

// funcao com retorno

function soma (a , b= 0){
    return a + b
}

console.log('valor da soma=',soma(2,3))
console.log('valor da soma =', soma(2))
console.log('valor da soma =', soma())