const fs = require('fs')

const produto = {
     nome:'Celular',
     preco: 2500.90,
     desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err=>{
    console.log(err || 'Arquivo salvo!')
})