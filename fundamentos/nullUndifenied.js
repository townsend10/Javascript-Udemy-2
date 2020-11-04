

let valor // não inicializada

console.log(valor)

valor=null //Ausencia de valor

console.log(valor)
//console.log(valor.toString()) // Erro!
const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco=3.50
console.log(produto.preco)

produto.preco= undefined // evitar atribuir undefinied
console.log(!!produto.preco)
console.log(produto)

//delete produto.preco
produto.preco = null // sem preço
console.log(produto.preco)

console.log(!!produto.preco)
console.log(produto)