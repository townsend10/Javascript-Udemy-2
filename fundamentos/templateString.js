const nome = 'George'

const concactenacao = 'Ola ' + nome + '!'
const template =  `
Olá
${nome}!`


console.log(concactenacao, template)

//expressoes

console.log(`1 + 1 = ${1+1}`)

const up = string => string.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)
