const prompt = require("prompt-sync")();

const tipoquarto = Number(prompt("Bem vindo ao Hotel do Jax!! \nEscolha seu tipo de quarto(seus preços estarão logo ao lado)\n1.Solteiro(R$110 a diaria) \n2.Casal(R$150 a diaria) \n3.Deluxe(R$250 a diaria)\n"));

switch(tipoquarto) {
    case 1:
        console.log("Você escolheu o quarto de Solteiro!");
        break;
    case 2:
        console.log("Você escolheu o quarto de Casal!");
        break;
    case 3:
        console.log("Você escolheu o quarto Deluxe!");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}