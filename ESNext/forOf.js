for(let letra of 'Naruto' )
console.log(letra)

const assuntoEcma = ['Map','Set','Promise']

for(let i in assuntoEcma) {

    console.log(i)//indice
   // console.log(assuntoEcma[i]) // valor
}

for(let assunto of assuntoEcma ){   
    console.log(assunto)
}

const assuntosMap =new Map([
    
    ['Map',{abordagem:true}],
    ['Set',{abordagem:true}],
    
    ['Promisse',{abordagem:false}]

])

for(let assunto of assuntosMap){
    console.group(assunto)
}
for(let chave of assuntosMap.keys()){
    console.log(chave)
}
for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [chav,val] of assuntosMap.entries()){
    console.log(chav,val)
}
for (let entradas of assuntosMap.entries()){
    console.log('\n',entradas)
}

const s = new Set(['a','b','c'])

for(let letra of s){
    console.log(letra)
}   