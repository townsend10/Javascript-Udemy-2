let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!!'ola')
console.log(!! [])
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isAtivo=true))

console.log('\nos falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('\nPara finalizar...')
console.log(!! ('' || null || 0 || ' '))

let nome= ''
console.log(nome || 'Nome nao registrado')
let nome2 = '\nGeorge'
console.log(nome2 || "Nome nao registrado")