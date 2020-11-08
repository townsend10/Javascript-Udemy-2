const moduloA = require('../../modulo1') //C:\Users\jogos\Desktop\Javascript Udemy\node\modulo1.js
console.log(moduloA.ola)    


const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res)=>{
    res.write('Bom dia, meu nome e george')
    res.end()

}).listen(8080)

