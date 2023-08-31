
// Exercícios de interpretação de código

// Atividade 1

let a = 10
let b = 10

// printa 10 que é o valor de b
console.log(b) 


b = 5
console.log(a, b)
// printa 10 que é o valor de a e 5 que é o novo valor de b 

// Atividade 2

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
// printa 10,10, 10

// Atividade 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// let horas = prompt("Quantas horas você trabalha por dia?")
// let salarioDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${salarioDia/horas} por hora`)

// --------------------------------------------------------------------------

// Exercícios de escrita de código

// Atividade 1

let nome;
let idade;

console.log(typeof nome, typeof idade );
// printou "undefined" por que não tem nada dentro da variavel

let nomeUsuario = prompt("Qual é o seu nome?")
let idadeUsuario = prompt('Qual é a sua idade?')
// printou "string" por que por padrão as variaveis são string

console.log("Olá", nomeUsuario,", você tem", idadeUsuario, "anos");

// Atividade 2
resposta1 = "NÃO"
resposta2 = "SIM"
resposta3 = "SIM"

console.log("Você está com frio?", resposta1);
console.log("Você gosta de Paramore?", resposta2);
console.log("Você gosta de cantar?", resposta3);

// Atividade 3

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)