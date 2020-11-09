//let e const

{
    var a= 2
    let b= 3
    console.log(b)
}
console.log(a)

//template string

const produto = 'Notbook'
console.log(`este é meu ${produto}`)

//destructing

const [l, e, ... tras]='Cod3r'
console.log(l,e, tras)

const [x, ,y]= [1,2,3] // Espaco vazio ignora o elemento
console.log(x,y)

const {idade,nome} = {nome:'Alfredo', idade: 65}
console.log(nome,idade)