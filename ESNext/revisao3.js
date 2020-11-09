//Object.values/Object.entries

const obj = {a: 1, b:2 , c: 3, d: 4}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//Melhoria notacao literal
const nome = 'Carla'

const pessoa ={
    nome,
    ola() {
        return 'Super Xandao na area'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class

class Animal {}
class Cachorro extends Animal{
        falar() {
            return 'au au'
        }   
}
console.log(new Cachorro().falar())