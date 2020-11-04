function getInteiroAleatorioEntre(min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opc = -1

 do {
    opc = getInteiroAleatorioEntre(-1 , 10)
   console.log(`Opção escolhida foi ${opc}.`)
} while(opc != -1)
console.log('Fim do codigo')