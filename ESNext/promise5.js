

function funcionarOuNao(valor,chanceDeErro){

    return new Promise((resolve,reject)=>{
        con.log('temp')
        try{
            if(Math.random()< chanceDeErro){
                reject('Ocorreu um erro!')  
                }else{
                    resolve(valor)
                }
        }catch(e){
            reject(e)
        }
   
    })
}
funcionarOuNao('Testando',0.9 )

.then(valor=>`valor:${valor}`)
//.then(console.log)
.then(valor => console.log(valor),
 err=> console.log(`Referencer Error: ${err}`)
 )
.then(()=> console.log('Quase Fim'))

//.then(valor=> console.log(`Valor: ${valor }`))

.catch(err=> console.log(`Erro: ${err}`))
.then(()=> console.log('Fim!'))
//.then(valor=> console.log(valor))