const prompt = require("prompt-sync")();

let peso = (Number(prompt("Insira seu peso em KILOS: ")));
let altura = (Number(prompt("Insira sua altura em METROS: ")));
let altura2 = altura ** 2;
let IMC = peso / altura2;

   if(IMC < 18.5){
      console.log("Você está abaixo do peso");
   }else if(IMC >= 18.5 && IMC <= 24.9){
      console.log("Você está com o peso normal");
   }else if(IMC >= 25 && IMC <= 29.9){
      console.log("Você está com sobrepeso");
   }else if(IMC >= 30 && IMC <= 34.9){
      console.log("Você está com grau de obesidade nivel I");
   }else if(IMC >= 35 && IMC <= 39.9){
      console.log("Você está com grau de obesidade nivel II");
   }else if(IMC >= 40){
      console.log("Você está com grau de obesidade nivel III");
   }






