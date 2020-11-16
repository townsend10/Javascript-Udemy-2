const { resolve } = require("path")

function gerarNumerosEntre (min,max) {
    if(min>max){
     
        [max,min]  = [min,max]   
    }    
    return new Promise(resolve=>{
        const fator = max-min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)  
    })
}
//gerarNumerosEntre(10,11).then(console.log)
gerarNumerosEntre(1,60)
.then(num=> num *10)
.then(resultado => `Numero chamado foi ${resultado}`)
.then(console.log)