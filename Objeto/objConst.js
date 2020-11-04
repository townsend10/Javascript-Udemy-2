// 
const pessoa = {
    nome: 'Paulo'
}
pessoa.nome = 'George'
console.log(pessoa)

//pessoa={nome:'Valentina'}
Object.freeze(pessoa) // congela tudo

const pessoaConstante = Object.freeze({nome:'Joao'})
console.log(pessoaConstante)