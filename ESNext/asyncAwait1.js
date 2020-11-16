function esperarPor(tempo = 2000){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Executando promise!')
           // resolve('Cuidado!!')
           resolve()
        }, tempo);
    })

}
/*
esperarPor(2000)
.then(()=> console.log('Executando Promise!'))
.then(esperarPor)
.then(()=> console.log('Executando Promise!'))
.then(esperarPor)
.then(()=> console.log('Executando Promise!'))
*/
async function executar() {
//    console.log('Executar')
esperarPor(2000)
console.log('Async/await 1....')
esperarPor(2000)
console.log('Async/await 2....')
esperarPor(2000)
console.log('Async/await 3....')
}

executar()