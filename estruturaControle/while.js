function getInteiroAleatorioEntre(min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opc = 0

while(opc != -1)  {
    opc = getInteiroAleatorioEntre(-1 , 10)
   console.log(`Opção escolhida foi ${opc}.`)
}
console.log('Fim do codigo')