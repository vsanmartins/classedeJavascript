

//function hello(){
//    console.log("Olá pessoal da infinity!")
//}
//hello()
//------------------------------------------------------------------------------------------------

function hello(nome){
    return `Olá ${nome}`
}

hello("Victor")

function soma(primeiroTermo, segundoTermo){
    return primeiroTermo + segundoTermo
}
const somatoria = soma(5,2)

function subtracao(x, y){
    return x - y 
}
const subtracaoo = subtracao(1,2)

function divisao(d, f){
    if(f === 0){
        return "Divisões não são possiveis por 0"
    }
    return d / f
}
const divisaoo = divisao(5,4)
console.log (somatoria)
console.log(subtracaoo)
console.log(divisaoo) 


