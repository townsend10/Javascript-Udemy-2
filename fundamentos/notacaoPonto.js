console.log(Math.ceil(6.2))//ceil arredonda o numero

const obj1 = {
}
obj1.nome='Bola'
//obj1['nome']= 'Bola 2'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome

}
const obj2 = new Obj('george')
const obj3 = new Obj('Michael')
console.log(obj2.nome)
console.log(obj3.nome)