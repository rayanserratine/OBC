function sayHello(){
    let hi = prompt('Oi, ta tudo bem?')
    return hi
}

function askName(){
    let name = prompt('Qual teu nome arrombado?')
    return name
}

function askAge(){
    let age = prompt('Ta, e tua idade?')
    return age
}

function askCity(){
    let city = prompt('Nasceu onde?')
    return city
}

function criarUser(name, age, city){
    let user = {
        name,
        age,
        city
    }
    return user
}

function show(user){
    alert('Usuario: \n' + 'Nome: ' + user.name + '\n Idade: ' + user.age + '\n Cidade: ' + user.city)
}

function loop(){
    let hi;
    do{
        hi = sayHello();
        if(hi !== 'sim') break;
        
        let name = askName();
        let age = askAge();
        let city = askCity();
        
        let user = criarUser(name, age, city);
        show(user);


    }while(hi == 'sim')

}

loop()