function criarProduto(nome,preco) {
return {
    nome,
    preco,
    desconto : 0.1
}
}
console.log(criarProduto('Notbook',3000.25))
console.log(criarProduto('Agua 10L',30.25))
console.log(criarProduto('Ipad',500.32))