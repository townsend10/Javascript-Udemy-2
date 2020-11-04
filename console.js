/*const PessoaNova={ 
    nome: 'George Michael Alves',
    idade:23,
    Cor:   'Branco',
    
    Logradouro:{
        Rua: 'Rua Francisco Paranhos',
        Numero : 131,
        Apt : 10

    }

    
    
}
//console.log(PessoaNova)
console.log(PessoaNova.Logradouro.Rua)*/


const novaNota = function (nota){
    if(nota>=7){
        console.log('Aluno aprovado')
    }else{
        console.log('Aluno reprovado')
    }

}
novaNota(10)

const treinandoFor = function(teste){
    for(let i = 1; i<10; i++){
        console.log(i)
    }
}
treinandoFor()