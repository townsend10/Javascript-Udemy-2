const mae ={
    nome: 'Valentina',
    corDoCabelo : 'Rosa'
}
const filha = Object.create(mae)
filha.nome= 'Maria'
console.log(filha.corDoCabelo)

const filho = Object.create(mae, {
    nome:{value:'George', writable:false, enumerable:true}
})
console.log(filho.nome)
console.log(`${filho.nome} tem cabelo ${filho.corDoCabelo}`)

console.log(Object.keys(filho))
console.log(Object.keys(filha))

for(let key in filho){
   // console.log(key)
   filho.hasOwnProperty(key) ?
   console.log(key) : console.log(`Por herança : ${key}`)
}