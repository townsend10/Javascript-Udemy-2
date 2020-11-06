const aprovados = ['George','Paula','Alfredo','Emiliam']
aprovados.forEach(function(nome,indice,array){
    console.log(`I:${indice + 1}) ${nome}`)
    console.log('Array :',array)
})

aprovados.forEach(nome=>console.log(`${nome}`))

const exibirAprovados = aprovados => console.log('Exibir aprovados:',aprovados)
aprovados.forEach(exibirAprovados)
