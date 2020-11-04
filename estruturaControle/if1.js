function notaMaior(nota) {

    if(nota>=7) {
        console.log('aluno aprovado ' + nota)

    }
}
notaMaior(9)
notaMaior(8)
notaMaior(3)

function seForVerdade(valor) {

    if(valor){
        console.log('É verdade... ' + valor)
    }
}
seForVerdade(1)
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1,3])
seForVerdade({})