//cadeia de prototipo
Object.prototype.atributo0 = 'X' 
const avo ={atributo1: 'A'}
const pai = {__proto__:avo, atributo2: 'B'}
const filho ={__proto__:pai, atributo3: 'C'}
console.log(filho.atributo0,filho.atributo1, filho.atributo2,filho.atributo3)

const carro = {
    velocidadeInicial: 0,
    velocidadeFinal: 330,

    acelerarCarro(delta){

        if(this.velocidadeInicial + delta <= this.velocidadeFinal){
            this.velocidadeInicial+=delta
        }else{
            this.velocidadeInicial = this.velocidadeFinal
        }
    },
    status(){
        return `${this.velocidadeInicial}Km/h de ${this.velocidadeFinal}Km/h`
    }
    }

    const ferrari= {
        modelo :'F40',
        velocidadeFinal:310 // shadow, sombreamento
    }

    const ford = {
        modelo:'Ranger',
        status() {
            return `${this.modelo}: ${super.status()}`
        }
    }

    Object.setPrototypeOf(ferrari,carro)
    Object.setPrototypeOf(ford,carro)

    console.log(ferrari)
    console.log(ford)

    ford.acelerarCarro(100)
    console.log(ford.status())

    ferrari.acelerarCarro(100)
    console.log(ferrari.status())