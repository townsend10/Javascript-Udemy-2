function getPreco(imposto=0, moeda = 'R$') {
    return `${moeda} ${this.preco *(1-this.desc) * (1+ imposto)}`
}

const produto = {
 nome: 'Pc Gamer',
 preco: 3500,
 desc: 0.20,
 getPreco
 
}
global.preco = 3500
global.desc =0.20   
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 40000.99,
    desc:0.20

}
console.log('Usando call:',getPreco.call(carro))
console.log('Usando apply:',getPreco.apply(carro))

console.log(getPreco.call(carro, 0.10, '$'))
console.log(getPreco.apply(carro,[0.15, '$']))