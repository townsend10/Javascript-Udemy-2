const express = require('express')
const app =express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req,resp)=>{
    console.log(req.body)
    resp.send('<h1>Parabens.Usuário adicionado! </h1>')
})
app.post('/usuarios/:id',(req,resp)=>{
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>Parabens.Usuário alterado! </h1>')
})
app.listen(3003)

//Quando for get 

// app.get('/usuarios',(req,resp)=>{
//     console.log(req.body)
//     console.log(req.query)  exibir a lista com query
//     resp.send('<h1>Parabens.Usuário adicionado! </h1>')
// })