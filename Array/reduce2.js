const alunos = [
    {nome: 'Fabiana', nota : 7.3, bolsista :true},
    {nome: 'Carla', nota : 9.5 ,bolsista : true},
    {nome: 'Geovana', nota : 4.0, bolsista: false},
    {nome: 'Carla', nota : 10.0, bolsista: true}

]
const todosBolsista =(resultado, bolsista)=> resultado && bolsista
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsista))

//algum aluno é bolsista

const bolsistaInserido= (resultado, bolsista)=> resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(bolsistaInserido))