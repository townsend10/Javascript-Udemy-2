//1
function ola (){
    return 'Ola'

}
console.log( ola() +' Leonardo!')

//2

function idade (anos) {

    return anos * 365
   
}
console.log(idade(25))
console.log(idade(70))

//3

function horasRealizadasNoTrabalho(horasTrabalhadasMes,horasRecebidasPorHora ) {
 //  horasRealizadasNoTrabalho* horasRecebidasPorHora
    return console.log(`Sálario igual a ` + horasTrabalhadasMes * horasRecebidasPorHora )
   
}
horasRealizadasNoTrabalho(150,40.5)

//4

function numeroEmes(mes) {

   
    switch (mes){
        case 1 : 
        console.log('Janeiro')
        break;
        case 2 :
            console.log('Fevereiro')
            break;
            case 3:
                console.log('Março')
                break;
                case 4:
                    console.log('Abril')
                    break
                    case 5:
                        console.log('Maio')
                        break
                        case 6:
                            console.log('Junho')
                            break
                            case 7:
                                console.log('Julho')
                                break
                                case 8:
                                    console.log('Agosto')
                                    break
                                    case 9:
                                        console.log('Setembro')
                                        break
                                        case 10:
                                            console.log('Outuburo')
                                            break
                                            case 11:
                                                console.log('Novembro')
                                                break

                                                case 12:
                                                    console.log('Dezembro')
                                                    break
                                             


    }
}
numeroEmes(12)

function maiorOuIgual (primeiroNumero, segundoNumero) {

  if(typeof primeiroNumero != segundoNumero ){
      return true
      
  } 
  return primeiroNumero>=segundoNumero
}
console.log(maiorOuIgual(5,1))

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }

console.log(inverso(10))
