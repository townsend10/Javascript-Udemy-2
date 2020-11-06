//object.preventeExtensions nao adiciona, mas pode excluir ou modificar

const produto = Object.preventExtensions({
    nome : 'Arroz',
    preco: 10.25,
    tag:'promocao'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome='Feijao'
produto.descricao = 'Feijao caipira'
delete produto.tag
console.log(produto)

//Object.seal - nao adiciona e nem exclui, apenas modifica

const pessoa = {
    nome: 'Alfredo',
    idade: 65
}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
delete pessoa.nome
pessoa.idade= 50

console.log(pessoa)

//Object. freeze    = congela tudo, nao exclui,nao modifica, nao adiciona
con