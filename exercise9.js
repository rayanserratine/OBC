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



function AreaDoTriangulo(base, altura){
return  base * altura/2
}


function AreaDoRetangulo(base, altura){
    return base * altura
}

function AreaDoQuadrado(lado){
    return lado * lado
}

function AreaDoTrapezio(baseMaior, baseMenor, altura){
return parseFloat(baseMaior + baseMenor) *altura/2
}

function AreaDoCirculo(raio){
return 3.14 * (raio * raio)
}

let option = ''

function askForOptions(){
    do{
  option = prompt('Ola, oq voce deseja fazer? \n\n A.Calcular area do triangulo \n B.Calcular area do retangulo' +
        '\nC.Calcular area do quadrado \nD.Calcular area do trapezio \nE.Calcular area do circulo \nF.Sair'
    )
    switch(option){
      case 'A':
        let baseTriangulo = prompt('Insira a base do triangulo')
        let alturaTriangulo = prompt('Insira a altura do triangulo')
        alert('A area do triangulo eh de ' + AreaDoTriangulo(baseTriangulo, alturaTriangulo));
      
        break;
      case 'B':
        let baseRetangulo = prompt('Insira a base do retangulo')
        let alturaRetangulo = prompt('Insira a altura do retangulo')
        alert('A area do retangulo eh de ' + AreaDoRetangulo(baseRetangulo, alturaRetangulo));
        break;
      case 'C':
        let ladoQuadrado = prompt('Insira o lado do quadrado')
        alert('A area do quadrado eh de ' + AreaDoQuadrado(ladoQuadrado) );
        break;
      case 'D':
        let baseMaiorDoTrapezio =parseFloat(prompt('Insira a base maior do trapezio') ) 
        let baseMenorDoTrapezio = parseFloat(prompt('Insira a base menor do trapezio'))
        let alturaDoTrapezio = prompt('Insira a altura do trapezio')
        alert('A area do trapezio eh de ' + AreaDoTrapezio(baseMaiorDoTrapezio, baseMenorDoTrapezio, alturaDoTrapezio));
        break;
      case 'E':
        let raioDoCirculo = prompt('Insira o raio do circulo')
        alert('A area do circulo eh de ' + AreaDoCirculo(raioDoCirculo));
        break;
      case 'F':
        alert('Saindo...');
        break;
      default:
        alert('Invalid option');

    }
}while (option != 'F')
}
    

askForOptions()


        

   

