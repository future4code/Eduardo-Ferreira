/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!");
 
var start = confirm("Deseja iniciar o jogo?");

class Player {
   constructor(name)
   {
      this.name = name;
      this.cards = [comprarCarta(), comprarCarta()];
   }

   newCard(){
      this.cards.push(comprarCarta());
      return true;
   }

   score(){
      let sum = 0;
      let i = 0;
      while(i < this.cards.length){
         sum += this.cards[i].valor;
         i++;
      }
      return sum;
   }
}

const user = new Player("Eduardo");
const computer = new Player("Computador");

if(start) {
   console.log("Novo rodada iniciada!");
   console.log(user.name + " - cartas:" + ` ${user.cards[0].texto}` + ` ${user.cards[1].texto}` + " - pontuação " + ` ${user.score()}`);
   console.log(computer.name + " - cartas:" + ` ${computer.cards[0].texto}` + ` ${computer.cards[1].texto}` + " - pontuação " + ` ${computer.score()}`);
   if(user.score() > computer.score()){
      console.log("O usuário " + user.name + " ganhou!");
   }else if (user.score() < computer.score()){
      console.log("O usuário " + computer.name + " ganhou!");
   }else{
      console.log("Empate");
      console.log("O " + user.name + " ganhou!");
      console.log("O " + computer.name + " ganhou!");
   }
} else {
	console.log("O jogo acabou!");
} 

