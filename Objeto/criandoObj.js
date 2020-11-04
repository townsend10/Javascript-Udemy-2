//usando notacao literal

const obj1 = {}
console.log(obj1)

//Object em JS=
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes construtoras

function Produto(nome,preco,desc){
    this.nome= nome

    this.getPrecoComDesconto= () =>{
        return preco *(1-desc)
    }
}
const p1 = new Produto('caneta',2.99,0.15)
const p2 = new Produto('Notbook',2500,0.45)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())
//onsole.log(p1)

//funcao factory

function criarFuncionairo(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1 = criarFuncionairo('Pedro',3000, 10)
const f2 = criarFuncionairo('Roberta',2500, 15)
const f3 = criarFuncionairo('Carlos',4000, 0)


console.log('Sálario de Pedro:',f1.getSalario())
console.log('Sálario de Roberta:',f2.getSalario())
console.log('Sálario de Carlos:',f3.getSalario())

//Object.Create

const filha = Object.create(null)
filha.nome= 'Valentina'
console.log(filha)

//Funcao famosa que retorna base

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)