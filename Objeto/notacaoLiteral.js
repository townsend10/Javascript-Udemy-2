const a = 1
const b = 2
const c = 3

const obj1= {a,b,c}
const obj2 = {a:a, b:b, c:c}
console.log(obj1,obj2)

const novaNota=10
const nomeDaPessoa = 'Alfredo'

const obj3 = {}
obj3[nomeDaPessoa]=novaNota
console.log(obj3)

const obj4 = {
        [nomeDaPessoa]:novaNota
}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {

    }
}

console.log(obj5)