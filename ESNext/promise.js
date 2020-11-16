function falarDepoisDe(segundos,frase) {
    return new Promise((resolve,reject)=>{//resolve(atendida) ou reject(rejeitada)
        setTimeout(() => {
            resolve(frase) // resolve so aceita um unico parametro
        }, segundos * 1000);
    })
}
falarDepoisDe(3,'Ola')
.then(frase => frase.concat('?!?'))
.then(frase2 => console.log(frase2))

// reject(frase) -> .catch(e=> console.log(e))