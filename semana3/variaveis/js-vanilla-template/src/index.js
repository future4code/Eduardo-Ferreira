/* ** Exercícios de interpretação de código** */

// Análise 1
// No primeiro console será impresso o número 10 e no segundo o 10 e o 5;

// Análise 2 
// Será impresso os números 10 10 10

/*  let nome;
    let idade;

    console.log(typeof nome, typeof idade); */

// As variáveis possuem o tipo undefined, pois não foram atribuídos valores iniciais.

let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

console.log(typeof nome, typeof idade);

// As variáveis acima são do tipo string, pois foram captadas através de um campo de texto.

console.log("Olá",nome,", você tem",idade,"anos.");

let pergunta1 = prompt("1. Quanto é 2 + 2?");
let pergunta2 = prompt("2. Quanto é 2 + 3?");
let pergunta3 = prompt("3. Quanto é 2 + 4?");
let pergunta4 = prompt("4. Quanto é 2 + 5?");
let pergunta5 = prompt("5. Quanto é 2 + 6?");

console.log("1. Quanto é 2 + 2?");
console.log("Resposta:",pergunta1);
console.log("2. Quanto é 2 + 3?");
console.log("Resposta:",pergunta2);
console.log("3. Quanto é 2 + 4?");
console.log("Resposta:",pergunta3);
console.log("4. Quanto é 2 + 5?");
console.log("Resposta:",pergunta4);
console.log("5. Quanto é 2 + 6?");
console.log("Resposta:",pergunta5);

/**/

const comidas = ["arroz","feijão","batata","tomate","cenoura"];

console.log(comidas);
console.log("Essas são as minhas comidas preferidas:");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

const comidaUsuario = prompt("Digite sua comida favorita! :)");

comidas[1] = comidaUsuario;

console.log(comidas);
console.log("Essas são as minhas comidas preferidas:");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

const perguntas = ["A cor do sol é amarela?", "A terra é redonda?", "Existe vida fora do planeta terra?"];
const respostas = [true, true, true];

console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);