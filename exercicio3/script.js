//códigos a serem reescritos

// a)
/*
if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
nome === "José" ? console.log(`Oi, Zé!`) : console.log("Olá," + nome)
}
// b)
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")

idade >=18 ? console.log(`Pode tirar carteira de motorista!`) : console.log(`Ainda não pode tirar carteira de motorista!.`)

}
*/
/*
const nome = "jose"
const idade = 18

nome === "jose" && idade >= 18 ? console.log("Pode tirar a carteira de motorista!") : console.log("Ainda não pode tirar a carteira de motorista!")
*/

const nomeUsuario = prompt ("Digite o seu nome:")
const idadeUsuario = Number(prompt("Digite a sua idade:"))

nomeUsuario === "José" ? console.log("Oi, Zé!") : console.log(`Olá ${nomeUsuario}!`)
idadeUsuario >= 18 ? console.log("Você pode tirar a carteira de morotista") : console.log("Você não pode tirar a carteira de motorista!")