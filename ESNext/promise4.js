

function gerarNumeroNovo(min,max,tempo){
    if(min>max){
        [min,max]=[max,min]
    }
    return new Promise(resolve=>{
        setTimeout(function(){
            const fator = max-min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)  
        },tempo)
    })
}
function gerarNumerosAleatorios() {
    return Promise.all([
       gerarNumeroNovo(1,60,1000),
       gerarNumeroNovo(1,60,500),
       gerarNumeroNovo(1,60,600),
       gerarNumeroNovo(1,60,400)
   
    ])
   }
   gerarNumerosAleatorios()
   .then(numeros=>console.log(numeros))



/*
function gerarNumerosEntre (min,max,tempo) {
    
    if(min>max) [max,min]  = [min,max]  
   
    return new Promise(resolve=>{
       setTimeout(() => {
        const fator = max-min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)  
    }, tempo)
    
})
}   */
