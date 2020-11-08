function Pessoa(nome) {
   this.nome = nome
  
   this.novoNome=function(){
     console.log(`Meu nome é ${this.nome}`)
    }
  
}

const pessoa1 = new Pessoa('George')
pessoa1.novoNome()
