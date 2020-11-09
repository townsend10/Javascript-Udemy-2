//rest(juntar)/ spread(espalhar)
//rest como parametro de funcao

//usar spread com objeto (...)

const funcionarios = {
    nome:'Carla',
    salario: 3000.50
}
const clone = {
    ativo : true,
    ...funcionarios
}

console.log(clone)
//usar spread com array

const grupo1 = ['Joao','Maria','Fernanda']
const grupo2 = ['Alfredo', ...grupo1]

console.log(grupo2)