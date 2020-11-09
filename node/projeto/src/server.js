const porta = 3003

const express = require('express')

const app = express()
const bodyParser = require('body-parser')   
const bancoDedDados = require('./bancoDeDados')


app.use(bodyParser.urlencoded({ extended: true}))
//app.use((req,res, next)=>{...}) ira pegar global

app.get('/produtos',(req, res, next)=>{
   // res.send({nome:'Notbook', preco:6500.50})
   res.send(bancoDedDados.getProdutos())
})

app.get('/produtos/:id', (req,res,next)=>{
    res.send(bancoDedDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{ 
    const produto = bancoDedDados.salvarProdutos({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON    RS
})

//Usando o put
app.put('/produtos/:id', (req, res, next)=>{ 
    const produto = bancoDedDados.salvarProdutos({
        id: req.params.id , 
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON    RS
})
//usando o delete

app.delete('/produtos/:id', (req,res,next)=>{
    const produto = bancoDedDados.deletaProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, ()=>{
    console.log(`Servidor esta executando na ${porta}. `)

})