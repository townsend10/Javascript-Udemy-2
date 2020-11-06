Array.prototype.filter2 = function(callback){
 
    const newArray=[]
    for(let i= 0; i<this.length;i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
        
    }
    return newArray
}

const produto = [
    {nome :'Notbook', preco:3000, fragil:true} ,
    {nome :'Iphone 12', preco:12000, fragil:true} ,
    {nome :'Copo', preco:10.45, fragil:true} ,
    {nome :'Borracha', preco:1.45,fragil:false} 
 
 ]
 //o filter ira filtrar , é como se fosse um if

 const caro = produto=> produto.preco>=1000
 const fragil = produto=> produto.fragil
 
 console.log(produto.filter2(caro).filter2(fragil))
 
 