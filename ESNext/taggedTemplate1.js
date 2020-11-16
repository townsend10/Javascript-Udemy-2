//tagged template -processa o template dentro de uma funcao

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String!'
}
const aluno = 'Joao'
const situacao = 'Aluno aprovado!'
console.log(tag `${aluno} :${situacao}`)