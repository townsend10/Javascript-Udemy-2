//function declaration
console.log(soma(3,4))

function soma(x,y) {

    return x + y
}
//function expression
const novo = function (x,y) {
    return x-y
}
console.log(novo(3,4))
//named function express

const mult = function mult(x,y){
    return x * y
}//beneficio na hora de debugar o codigo, o nome da funçao ira aparecer na hora
console.log(mult(3,4))