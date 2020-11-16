const produtosNovos = new Map()
produtosNovos.set('celular', {caro : true})
produtosNovos.set('carro', {caro : true})
produtosNovos.set('borracha', {caro : false})

console.log(produtosNovos.get('celular').caro)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{},'Objeto'],
    [321,'Numero']
])

chavesVariadas.forEach((val,chav)=>{
     console.log(val,chav)
})
console.log(chavesVariadas.has(321))
chavesVariadas.delete(321)
console.log(chavesVariadas)
console.log(chavesVariadas.has(321))

console.log(chavesVariadas.size)

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')
console.log(chavesVariadas)