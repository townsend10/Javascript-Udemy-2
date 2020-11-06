const pessoa  = {
    nome : 'Valentina',
    idade : 6,
    peso: 15.45 
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}= ${e[1]}`)
})

//Usando destructing

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`Usando desctucting :${[chave]}= ${[valor]}`)
});

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true, // false ->nao ira ser enumerado na lista de chaves quando for falso
    writable:false,
    value: '01-10-2005'
})

pessoa.dataNascimento = '01-10-2004'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAscrpit 2015)

const dest= {a: 1}
const o2 = {b:2}
const o3 = {c:3, a:4}
const obj = Object.assign(dest,o2,o3)

console.log(obj)