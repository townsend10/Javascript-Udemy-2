const produto = [
   {nome :'Notbook', preco:3000, fragil:true} ,
   {nome :'Iphone 12', preco:12000, fragil:true} ,
   {nome :'Copo', preco:10.45, fragil:true} ,
   {nome :'Borracha', preco:1.45,fragil:false} 

]
//o filter ira filtrar , é como se fosse um if
console.log(produto.filter(function(p){
    return true

 //  return p.preco <10
}))
const caro = produto=> produto.preco>=1000
const fragil = produto=> produto.fragil

console.log(produto.filter(caro).filter(fragil))

