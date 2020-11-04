//  colecao diniamica de  pares chaves/valor

const produto = new Object
produto.nome = 'Livro'
produto['marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)

const carro = {
    modelo : 'Ferrari',
    valor : 120000,
    proprietario : {
        nome: 'Geoge',
        idade: 23,
        endereco:{
            rua: 'Francisco Paranhos',
            numero : 131

        }
    },
    condutores :[{
        nome: 'Valentina',
        idade: 18
    }, {
        nome: 'Alfredo',
        idade: 64
    }],
    calcularSeguro : function(){
        //xxx
    }
}

//carro.proprietario.numero =1000
carro ['proprietario'] ['endereco'] ['rua'] ='Vila Nova'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro

console.log('\nDepois de excluidos:',carro)
