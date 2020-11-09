//middleware pattern [chain of responsability]

const passo1 = (ctx, next) => {
    ctx.valor1= 'midware 1'
 next()
}

const passo2 = (ctx, next) =>{
    ctx.valor2 = 'midware 2'
    next()

    
}

const passo3 = ctx => ctx.valor3 = 'midware 3'

const exec = (ctx, ...middlewares)=> {
    const execPasso = indice =>{
        middlewares && indice< middlewares.length &&
middlewares[indice](ctx, ()=> execPasso(indice+1))
    }
    execPasso(0)
}
const ctx ={}
exec(ctx,passo1,passo2,passo3)

console.log(ctx)