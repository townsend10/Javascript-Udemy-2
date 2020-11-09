const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 0',function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
} )  //primeiro é em segundos, dps vem minutos,horas,dia
//mes e dia da semana, 0= domingo, 1= segunda....

setTimeout(() => {
    tarefa1.cancel()

    console.log('Tarefa 1 cancelada!')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,5)]//segunda a sexta
regra.hour= 20 //na hora 20
regra.second= 30 // no segundo 30 da hora

const tarefa2= schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})
