const escola =[{
    nome: 'Turma 3001',
    alunos:[{
        nome: 'Gustavo',
        nota: 9.5
    },{
        nome:'Paulo',
        nota: 6.5
    }]

},{
    nome: 'Turma 3002',
    alunos:[{
        nome: 'Paulo',
        nota: 9.0
    },{
        nome:'Carlos',
        nota: 7.3
    }]

}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1= escola.map(getNotaDaTurma)

console.log(notas1)

console.log([].concat([9.5, 6.5], [9.0 , 7.3]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2= escola.flatMap(getNotaDaTurma)
console.log(notas2)