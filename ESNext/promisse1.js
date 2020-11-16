const { privateEncrypt } = require("crypto")
const { promises } = require("fs")

let a = 10
console.log(a)

let p = new Promise(function(resolve){
    resolve({
        x: 3,
        y: 4
    }) // apenas um parametro, para mais de um parametro usa o objeto
})  

let loja = new Promise((produto)=>{
    produto([
        'Notbook', 'Iphone', 'Tablet','Monitor'
    ])
})
//Com array
loja.then(produtoNovo => console.log(produtoNovo))

function primeiroElemento(array) {
    return array[0]
}

loja
/*  //Passando a primeira letra
.then(valor=>valor[1])
.then(primeiro => primeiro[1])
.then(letra => console.log(letra))*/

//Passando o valor indicado no array
/*
.then(valor=>valor[0])
.then(valor => console.log(valor))
*/

//toLowercase  (letra minsucula)
.then(valor=>valor[0])
.then(primeiro=>primeiro[0])
.then(letra => letra.toLowerCase(0))
.then(letraMinuscula => console.log(letraMinuscula))

/*
.then(produtos => produtos[2])
.then(produtos => console.log(produtos))
.then(valor => valor[1])
.then(primeiro => primeiro[1])
.then(letra => console.log(letra)) */
//console.log(typeof p)

console.log(typeof Promise)
p.then(novo => console.log(novo))
p.then(valorX => console.log(valorX))