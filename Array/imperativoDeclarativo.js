const alunos = [
    {nome:'Carla',nota:6.5},
    {nome:'Paula',nota:4.0},
    {nome:'Carla',nota: 9.5}
]

// imperativa
let total = 0
for (let i = 0 ; i<alunos.length;i++){
    total+= alunos[i].nota

}
console.log('nota total:',total)
console.log('Media dos aluns',total/alunos.length)

//declarativo
const getNota = aluno=>aluno.nota
const soma2=(total,atual)=>total + atual
const total2 = alunos.map(getNota).reduce(soma2)

console.log(total2/alunos.length)
