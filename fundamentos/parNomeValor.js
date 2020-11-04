//par / nome valor

const george = 'O melhor'// contexto lexico 1

function exec() {

const george = 'nota dez'//contexto lexico 2
return george
}
//exec()
//console.log(george)

//Objetos sao grupos aninhados de pares nome/valor

const michael = {
    nome:'Alves',
    idade:23,
    peso:52,
    endereco:{
        logradouro : 'Rua Francisco Paranhos',
        numero :131
    }
}
console.log(george)
console.log(exec())
console.log(michael)