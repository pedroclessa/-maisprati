const nota = 70

if (nota >= 70){
    console.log("Parabens Você passou")
} else {
console.log("Rodou merda")
}


let idade = 42

if ((idade >=18) && (idade <=32)){
    console.log("Voce pode participar")
}else{
    console.log("Brecado")
}

let numero = 4932522

if (numero % 2 == 0){
    console.log("É par")
}else{
    console.log("É impar")
}

let numero2 = 10

let numero3 = 20

let Multiplicação = numero2 * numero3
let Divisão =  numero2 / numero3
let Adição =  numero2 + numero3
let Subtração = numero2 - numero3

console.log("Multiplicação =",  Multiplicação)
console.log("Divisião =",  Divisão)
console.log("Adição =",  Adição)
console.log("Subtração =",  Subtração)


let val1 = 13
let val2 = 15
let val3 = 17

if((val1 > val2) && (val1 > val3)){
    console.log("O primeiro valor é o maior")
}else if((val2 > val1) && (val2 > val3)){
    console.log("O segundo valor é o maior")
}else if((val3 > val1) && (val3 > val2)){
    console.log("O terceiro valor é o maior")
}


const prompt = require("prompt-sync")()

let num1 = Number(prompt("Insira primeiro numero"))
let num2 = Number(prompt("Insira segundo numero"))
let op = prompt("Insira a operação")
let resultado = 0

if(op === "+"){
    resultado = num1 + num2
}else if(op === "-"){
    resultado = num1 - num2
}else if(op === "*"){
    resultado = num1 * num2
}else if(op === "/"){
    resultado = num1 / num2
        if(num2 !== 0){
            console.log("Divisão por zero não é possivel")
        }else{
            console.log("Deu ruim")
        }
}console.log("O resultado é", resultado)