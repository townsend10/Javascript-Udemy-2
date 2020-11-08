//Função em JS é First Class Object (Citiziens)
//Higher order Function

//criar de forma literal:
function fun() {

}
//armazenar em uma variavel:
const func2 = function() {

}
//armazenar em um Array:
const array = [function (a,b){
    return a + b
}, fun,func2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto    
const obj = {

}
obj.falar= function () {
    return 'Oi'
}
console.log(obj.falar())

//Passar função com parametro

function ir (correr) {
    correr()
}
ir(function (){
    console.log('\n Função esta sendo usada!')
})

//Uma função pode retornar/conter uma função

function soma(a,b){
        return function(c){
            console.log(a+b+c)
        }
}
soma(2,3)(4)

const novaFuncao  = soma(2 ,3)
novaFuncao(4)