const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //massa quebrou carro, pop tira o ultimo da lista

console.log(pilotos)

pilotos.push('Verstappen') //adiciona um novo elemento
console.log(pilotos)

pilotos.shift() // remove da primeira posicao
console.log(pilotos)

pilotos.unshift('Barrichelo') //adiciona no comeco
console.log(pilotos)

//splice pode adicionar ou remover elementos    

//adicionar
pilotos.splice(2, 0 , 'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //bye massa
console.log(pilotos)

const novoPiloto = pilotos.slice(2) //novo array
console.log(novoPiloto)

const novoPiloto2 = pilotos.slice(1,4) // vai corta os elementos , removendo o 1 e o 4, e sobrando o 2 e 3
console.log(novoPiloto2)