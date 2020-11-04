const valor= [14.2 ,10.2, 15.3, 4.5]



console.log(valor[0], valor[3])
console.log(valor[4])

valor[4]=30 
console.log(valor)
console.log(valor.length)

valor.push({id: 3}, false ,null,'teste')
console.log(valor)  

console.log(valor.pop())
delete valor[0]
console.log(valor)

console.log(typeof valor)

