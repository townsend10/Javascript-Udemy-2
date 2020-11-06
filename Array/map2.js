const carrinho =  [
    '{"nome" : "Borracha", "preco" : 2.40 }',
    '{"nome" : "Caderno", "preco" : 5.40 }',
    '{"nome" : "kit de lapis", "preco" : 6.50 }',
    '{"nome" : "Caneta bic", "preco" : 1.20 }'

]

//retorne um array com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)