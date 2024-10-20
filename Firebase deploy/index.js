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
    
    let users = []
    let hi;
   
    do{ 
        hi = sayHello();
        if(hi !== 'sim') break;
        
        let name = askName();
        let age = askAge();
        let city = askCity();
        
        let user = criarUser(name, age, city);
        users.push(user);
        show(user);


    }while(hi == 'sim')

        function interar(){
            for(i = 0; i < users.length; i ++)
                console.log('Usuario numero: ' + (i + 1) + '\n Nome: ' + users[i].name + 
            '\nAge: ' + users[i].age + '\nCity: ' + users[i].city)
        }
        interar()
        
}

loop()