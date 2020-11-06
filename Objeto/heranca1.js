const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324
}
const chevrolet = {
    modelo: 'celta',
    velocidadeMaxima: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(chevrolet.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__)

function testandoNovo(){}
console.log(typeof Object, typeof testandoNovo)
console.log(Object.prototype, testandoNovo.prototype)