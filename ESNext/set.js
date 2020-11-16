//nao aceita repeticao

const { timeLog, time } = require("console")
const { maxHeaderSize } = require("http")

const times = new Set()
times.add('Flamengo')
times.add('Corinthias').add('Palmeiras').add('Fluminense')
times.add('Palmeiras')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Palmeiras')

console.log(times)
console.log(times.has('Palmeiras'))

const  nomes = ['Pedro','Paulo','Lurdes','Lurdes','Julia']
const nomeSet = new Set(nomes)
console.log(nomeSet)