const fs = require ('fs')
const path = require ('path')

const caminho = path.join(__dirname,'dados.txt')

function lerArquivos(caminho) {
    return new Promise(resolve=>{
        fs.readFile(caminho, function(){
            resolve.toString(conteudo)
        })
        console.log('Depois de ler')
    })
}
lerArquivos(caminho)
    .then(conteudo=>{
        console.log(conteudo)
    })