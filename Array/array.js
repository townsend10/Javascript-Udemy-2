console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Valentina', 'Alfredo', 'George')
console.log(aprovados)

aprovados =['Valentina', 'Alfredo', 'George']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[9] = 'Pedro'
console.log(aprovados[9])
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Jeovana', 'Marcela','Karina']
aprovados.splice(1,0, 'Paulo','Carlo') //primeiro elemento q ele vai excluir ate n 
console.log(aprovados)