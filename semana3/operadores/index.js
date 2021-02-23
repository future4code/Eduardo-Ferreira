/* 1 .
    a. false
    b. false
    c. true
    e. boolean
*/

/* 2 .
    a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9
*/

// 1.
var userAge = Number(prompt("Qual a sua idade?"));
var friendAge = Number(prompt("Qual a idade do seu melhor amigo?"));

var older = userAge > friendAge;

console.log("Sua idade é maior do que a do seu melhor amigo? " + older);
console.log(userAge - friendAge);

// 2.
var pair = Number(prompt("Insira um número par! :)"));
var rest = pair % 2;

console.log("Resto da divisão do número " + pair + " / 2: " + rest);

// Os números pares são divisíveis por 2, por isso o resto sempre vai dar 0. Equanto os ímpares retornarão o resto igual a 1.

// 3.
let listaDeTarefas = [];

listaDeTarefas.push(prompt("Digite 3 tarefas que você precisa termina hoje! Primeira tarefa:"));
listaDeTarefas.push(prompt("Segunda tarefa:"));
listaDeTarefas.push(prompt("Terceira tarefa:"));

console.log(listaDeTarefas);

var index = Number(prompt("Digite um índice referente as tarefas que você realizou! Ex.: 0, 1 ou 2"));

listaDeTarefas.splice(index, 1);

console.log(listaDeTarefas);

// 4.

var userName = prompt("Qual o seu nome?");
var userEmail = prompt("Qual o seu email?");

console.log("O e-mail " + userEmail + " foi cadastrado com sucesso. Seja bem-vinda(o), " + userName + "!");


/* DEASFIOS 
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32
*/
// 1. 

var grauF = 77;
var grauC = 80;
var grauK = 30;

var resultK = (grauF - 32) * 5 / 9 + 273.15;
var resultF = (grauC * 9/5) + 32


console.log("a. " + resultK + " Grau Kelvin");
console.log("b. " + resultF + " Grau Fahrenheit");
console.log("c. " + (30 + 273.15) + " Grau Kelvin e " + ((30 * 9/5) + 32) + " Grau Fahrenheit");

var grau = Number(prompt("Digite um valor em grau Celsius"));

console.log("d. " + (grau + 273.15) + " Grau Kelvin e " + ((grau * 9/5) + 32) + " Grau Fahrenheit");

// 2. 

var quilowatt = 280;
var quilowattH = 280 * 0.05;

console.log("Custo de energia por hora: " + "R$ " + quilowattH);
console.log("Custo de energia com 15% de desconto: R$ " + (0.85 * quilowattH));

// 3.

const lb = 20 / 2.205;
const oz = 10.5 / 35.274;
const mi = 100 * 1609;
const ft = 50 / 3.281;
const gal = 103.56 * 3.785;
const xic = (450 * 6) / 25;

console.log("20lb equivalem a " + lb + " kg");
console.log("10.5oz equivalem a " + oz + " kg");
console.log("100mi equivalem a " + mi + " m");
console.log("50ft equivalem a " + ft + " m");
console.log("103.56gal equivalem a " + gal + " l");
console.log("450 xic equivalem a " + xic + " l");

