// function ola(){
//     console.log('Hello world')
// }

// ola()

// function double(x){
//  alert('O dobro de ' + x + ' eh ' + (x * 2))
// }

// double(4)

// function sayName(x = 'World') {
//     alert('Hello ' + x)
// }

// sayName('Rayan')
// sayName()

// function sum(a,b){
//     alert('O resultado da soma eh ' + (a + b))
// }

// sum(2, 6)

// function criarUsuario(nome, email, senha, tipo = 'admin'){
//     usuario = {
//         nome,
//         email,
//         senha,
//         tipo
//     }
//     console.log(usuario)
// }

// criarUsuario('Rayan', 'rayan.serratine@gmail.com', 'cys12345')

// function user(x){
// user.name
// user.age 
// user.email 
// user.country
// console.log(x)
// }
//  const user1= {
//     name: 'dibit',
//     age: 50,
//     email: 'dibit@gmail.com',
//     country: 'Brasil'

//  }

//  const user2 = {
//     name: 'M-bit',
//     age: 70,
//     email: 'mullet@gmail.com',
//     country: 'Brasil'
//  }

//  user(user1)
//  user(user2)

// function calcularMedia(a, b){
//     const media = (a + b)/2
//     return media
// }

// console.log(calcularMedia(2,6))

// function maioridade(idade){
//     if (idade > 18){
//         return 'Dimaio'
//     }
//     else {
//         return 'dimeno'
//     }
// }

// console.log(maioridade(15))

// let pokemon = 'Charmander'

// function evoluirPokemon(){
//     pokemon = 'Charmeleon'
// } 

// console.log(pokemon)
// evoluirPokemon()
// console.log(pokemon)



function AreaDoTriangulo(){
const base = prompt('Informe a base do triangulo')
const altura = prompt('Informe a altura do triangulo')
return  base * altura/2
}


function AreaDoRetangulo(){
  const base = prompt('Informe a base do retangulo')
  const altura = prompt('Informe a altura do retangulo')
    return base * altura
}

function AreaDoQuadrado(){
  const lado = prompt('Informe o lado do quadrado')
    return lado * lado
}

function AreaDoTrapezio(){
  const baseMaior = parseFloat(prompt('Informe a base maior do trapezio'))
  const baseMenor = parseFloat(prompt('Informe a base menor do trapezio'))
  const altura = prompt('Informe a altura do trapezio')
return (baseMaior + baseMenor) *altura/2
}

function AreaDoCirculo(){
  const raio = prompt('Informe o raio do circulo')
return 3.14 * (raio * raio)
}

let option = ''

function Menu(){
option = prompt(
    '1.Calcular area do triangulo\n' +
    '2.Calcular area do retangulo\n' +
    '3.Calcular area do quadrado\n' +
    '4.Calcular area do trapezio\n' +
    '5.Calcular area do circulo\n' +
    '6.Sair' 
  )
  return option;
}


function calcular(){
let result = ''
do{
  
   const selectedOption = Menu()
  switch (selectedOption){

    case '1':
      result = alert('O resultado da area do triangulo eh de ' + AreaDoTriangulo())
      break;

    case '2':
      result = alert('O resultado da area do retangulo eh de ' + AreaDoRetangulo())
      break;

    case '3':
      result = alert('O resultado da area do quadrado eh de ' + AreaDoQuadrado())
      break;

    case '4':
      result = alert('O resultado da area do trapezio eh de ' + AreaDoTrapezio())
      break;

    case '5':
      result = alert('O resultado da area do circulo eh de ' + AreaDoCirculo())
      break;
    
    case '6':
      alert('Saindo...')
      break;

    default:
      alert('Invalid option')
      
   }
}while(option !== '6')
}

calcular()