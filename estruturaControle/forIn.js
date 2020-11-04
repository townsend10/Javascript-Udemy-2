const notas= [10, 3, 5.2 , 6.0, 7.2] 

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'George',
    sobrenome: 'Alves',
    idade : 23,
    peso: 52
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}