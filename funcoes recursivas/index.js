// function dividir(num){
//     console.log(num)
//     if(num % 2 === 0){
//         dividir(num/2)
//     }else {
//         return num
//     }
//     }

//     dividir(200)

function fatorial(num){
    console.log(num)
    if(num === 0){
        return 1
    }else if(num === 1){
        return 1
    }else {
        return num * fatorial(num -1)
    }
}

console.log(fatorial(5))