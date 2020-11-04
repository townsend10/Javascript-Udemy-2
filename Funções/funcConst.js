function carro(velocidadeMax=200, delta=5) {
    //atributo privado
    let velocideAtual = 0

    //metodo publico
this.acelerar = function() {
        if(velocideAtual +  delta <= velocidadeMax){
            velocideAtual+=delta
        }
        else{
            velocideAtual=velocidadeMax
        }
        
}
//metodo publico
this.getVelocidadeAtual = function() {
    return velocideAtual
}


}
const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())