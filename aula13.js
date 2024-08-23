// const prof = {
//     nome : "Julio",
//     materia : "Matematica",
//     notas: {
//         aluno: 4.0,
//         aluno2: 6.0,
//         aluno3: 10,
//         aluno4: 5.5,
//         aluno5: 7.5
//     }

// }

// let somanota = 0
// let numeroestudantes= 0 

// for(let alunos in prof.notas){
//     somanota += prof.notas[alunos]
//     numeroestudantes++

// }

//     let média = somanota / numeroestudantes

// console.log(`A nota média da turma é: ${média}`)

// if (média >= 6){
//     console.log(`A turma do professor ${prof.nome} está acima da média`)
// }else{
//         console.log(`A turma do professor ${prof.nome} está abaixo da média`)

// }


const filmes = [
    {titulo : "Homem Aranha", genero: "Ação"},
    {titulo : "Deadpool", genero: "Herois"},
    {titulo : "Vingadores", genero: "Drama"},

]

let numerofilmes = {}

filmes.forEach(filme =>{
    if(numerofilmes[numerofilmes]){
        numerofilmes[filme.genero]++
    } else {
        numerofilmes[filme.genero] = 1
    }
})

for(let genero in numerofilmes){
    console.log(`Existem ${numerofilmes[genero]} filmes de gênero ${genero}`)

}