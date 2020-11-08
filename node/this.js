console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
        console.log('Dentro da funcao')
        console.log(this === exports)
        console.log(this === global )
        console.log(this === module.exports)

        this.atencao = 'Cuidado'
}
logThis()
// this -> dentro da funcao é global, fora da funcao é no module.exports