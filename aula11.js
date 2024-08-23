

// function somararrays () {
//      let par = []
//      let numero = [1, 4, 4, 4, 6, 7]

//  for(l = 0; l < numero.length; l++){
//      if(numero[l] % 2 === 0)    
//      par.push(numero[l])
    
//     }
//     console.log(par)
// }

// somararrays()

// function somar(){
//     let soma = 0
//     let numero = [1, 4, 4, 4, 6, 7]
    
//     for(let i = 0; i < numero.length; i ++){
//         soma += numero[i]
//         console.log(soma)
//     }
// }

// somar()

// function reveterarrays(){
//     let numero = [1, 4, 4, 4, 6, 7]

//      for(let k = numero.length - 1; k >= 0; k--){
//                  console.log(numero[k])
//          }

// }

// reveterarrays()

function highnumber(){
    let numero = [1, 4, 4, 4, 6, 7]
     let max = numero[0]

 for(j = 0; j < numero.length; j++){
     if(numero[j] > max){
         max = numero[j]

   }
}
console.log(max)
}

highnumber()

function highocurrence(){
    let numero = [1, 4, 4, 4, 6, 7]
    let ocorrencias = []
let valor = 4
let count = 0

for(z = 0; z < numero.length; z++){
    if(numero[z] === valor)
        count++

}
ocorrencias = count
console.log(ocorrencias)

}

highocurrence()