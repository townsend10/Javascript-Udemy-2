Array.prototype.map2 = function (callback){
    const newArray=[]
    for(let i= 0; i<this.length;i++){
        newArray.push(callback(this[i], i, this))
        
    }
    return newArray
}

const carrinho =  [
    '{"nome" : "Borracha", "preco" : 2.40 }',
    '{"nome" : "Caderno", "preco" : 5.40 }',
    '{"nome" : "kit de lapis", "preco" : 6.50 }',
    '{"nome" : "Caneta bic", "preco" : 1.20 }'

]

//retorne um array com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)