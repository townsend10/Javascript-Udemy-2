//Armazenando uma funçao em uma variavel
const imprimirSoma= function(a,b){

    console.log(a+b)
}
imprimirSoma('valor da soma =',2,3)

//Armazenando uma funcao arrow em uma variavel =>(arrow function)

const soma = (a,b)=>{
    return a + b
}

console.log('valor da soma =',soma(2,3))

//retorno implicito

const subtracao = (a,b)=> a - b
console.log(subtracao(2,3))