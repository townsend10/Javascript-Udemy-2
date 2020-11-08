const notas = [1.2, 3.2, 7.5, 4.5, 6.1 , 5.0, 8.1]

// Sem callback

const notasBaixas = []

for(let i in notas) {
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
    
}
console.log(notasBaixas)

//COm callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas =>notas< 7  )