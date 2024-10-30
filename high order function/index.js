function calcular(a,b, operacao){
    console.log('Realizando algo')
    const result = operacao(a,b)
    return result
}

function somar(x, y){
console.log('Somando')
return x + y
}

console.log(calcular(3,5, somar))

console.log(calcular(2, 6 , function(x,y){
    console.log('Realizando uma subtracao')
    return x - y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ['Abacate', 'Pessego', 'Beterraba', 'Limao']

for(let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

const avengers = ['Wolverine', 'Demolidor', 'Spider man', 'Thor', 'Hulk']

avengers.forEach(exibirElemento)