/*
const produto= [
1,2,3,4
]
const reducer = (valor1, valorAtual) => valor1 + valorAtual
console.log(produto.reduce(reducer)) // vai somar tudo

console.log(produto.reduce(reducer,5)) //soma tudo e adiciona 5
console.log(produto.reduce(reducer, -5)) //subtrai 5

// Reduce da Udemy
*/
const alunos = [
    {nome: 'Fabiana', nota : 7.3, bolsista :true},
    {nome: 'Carla', nota : 9.5 ,bolsista : true},
    {nome: 'Geovana', nota : 4.0, bolsista: false},
    {nome: 'Carla', nota : 10.0, bolsista: true}

]
console.log(alunos.map(a=> a.nota))
const resultado = alunos.map(a=> a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)