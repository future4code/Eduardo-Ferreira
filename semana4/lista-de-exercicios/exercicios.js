//Exercício 1

function inverteArray(array) {
   let arrInvert = []
   for (let i = array.length - 1; i >= 0; i--) {
      arrInvert.push(array[i]);
   }
   return arrInvert;
}

/* let i = 0;
while (i < array.length) {

   i++
} */
//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let i = 0;
   let arrInvert = []
   while (i < array.length) {
      if (array[i] % 2 == 0) {
         arrInvert.push(Math.pow(array[i], 2));
      }
      i++
   }
   return arrInvert;
}

//Exercício 3

function retornaNumerosPares(array) {
   let arrInvert = []
   let i = 0;
   while (i < array.length) {
      if (array[i] % 2 == 0) {
         arrInvert.push(array[i]);
      }
      i++
   }
   return arrInvert;
}

//Exercício 4

function retornaMaiorNumero(array) {
   let i = 0;
   let maiorNum = 0;
   while (i < array.length) {
      if (array[maiorNum] < array[i + 1]) {
         maiorNum = i + 1;
      }
      i++
   }
   return array[maiorNum];
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   const arr = [booleano1 && booleano2 && !booleano4,
   (booleano1 && booleano2) || !booleano3,
   ((booleano2 || booleano3) && (booleano4 || booleano1)),
   (!(booleano2 && booleano3) || !(booleano1 && booleano3)),
   (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))];

   return arr;
}

//Exercício 7

function retornaNNumerosPares(n) {
   let i = 0;
   let t = 0;
   let arrInvert = []
   while (t < n) {
      arrInvert.push(0 + i);
      i += 2;
      t++;
   }
   return arrInvert;
}

// Exercício 8

function checaTriangulo(a, b, c) {

   const equilatero = ((a == b) && (b == c));
   const isosceles = ((a != b) || (b != c)) && ((a == b) || (b == c));

   if (equilatero)
      return "Equilátero";
   else if (isosceles)
      return "Isósceles";
   else
      return "Escaleno";
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   const maior = num1 > num2 ? num1 : num2;
   const menor = num1 < num2 ? num1 : num2;

   return {
      maiorNumero: maior,
      maiorDivisivelporMenor: maior % menor == 0 ? true : false,
      diferenca: maior - menor
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   const newArr = [];
   let num = 0
   let n = array.length;

   while (n > 0) {
      for (let i = 0; i < n; i++) {
         if (array[num] > array[i + 1]) {
            num = i + 1;
         }
      }
      num = array.splice(num, 1);
      newArr.push(num[0]);
      n = array.length;
      num = 0;
   }
   const segundoMaiorEmenor = []
   segundoMaiorEmenor.push(newArr[newArr.length - 2],newArr[1]);
   return segundoMaiorEmenor;
}

// Exercício 11

function ordenaArray(array) {
   const newArr = [];
   let num = 0
   let n = array.length;

   while (n > 0) {
      for (let i = 0; i < n; i++) {
         if (array[num] > array[i + 1]) {
            num = i + 1;
         }
      }
      num = array.splice(num, 1);
      newArr.push(num[0]);
      n = array.length;
      num = 0;
   }
   return newArr;
}

// Exercício 12

function filmeFavorito() {

   return {
      nome: String("O Diabo Veste Prada"),
      ano: Number(2006),
      diretor: String("David Frankel"),
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
}

// Exercício 13

function imprimeChamada() {
   const obj = {
      nome: String("O Diabo Veste Prada"),
      ano: Number(2006),
      diretor: String("David Frankel"),
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return `Venha assistir ao filme ${obj.nome}, de ${obj.ano}, dirigido por ${obj.diretor} e estrelado por ${obj.atores[0]}, ${obj.atores[1]}, ${obj.atores[2]}, ${obj.atores[3]}.`
}
// Exercício 14

function criaRetangulo(lado1, lado2) {

   return {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
}

// Exercício 15

function anonimizaPessoa(pessoa) {

   return {
      nome: "ANÔNIMO",
      idade: pessoa.idade,
      email: pessoa.email,
      endereco: pessoa.endereco
   }

}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const arr = arrayDePessoas.filter(element => {
      return element.idade > 18;
   });

   return arr;
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const arr = arrayDePessoas.filter(element => {
      return element.idade < 18;
   });

   return arr;
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const arr = array.map(valor => {
      return valor * 2;
   });

   return arr;
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const arr = array.map(valor => {
      return String(valor * 2);
   });

   return arr;
}

// Exercício 17, letra C

function verificaParidade(array) {
   const arr = array.map(valor => {
      if (valor % 2 === 0) {
         return valor + " é par";;
      } else {
         return String(valor + " é ímpar");
      }
   });

   console.log(arr);
   return arr;
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const arr = pessoas.filter(element => {
      return element.idade < 60 && element.altura >= 1.5 && element.idade > 14
   });

   console.log(arr)
   return arr;
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   const arr = pessoas.filter(
      element => {
         return (element.idade < 14 || element.idade > 60) || element.altura < 1.5
      })
   return arr;
}


//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   const mensagens = []
   for (let i = 0; i < consultas.length; i++) {
      if (consultas[i].cancelada == false) {
         mensagens.push(`Olá, ${consultas[i].genero == "masculino" ? "Sr." : "Sra."} ${consultas[i].nome}. Estamos enviando esta mensagem para ${consultas[i].genero == "masculino" ? "lembrá-lo" : "lembrá-la"} da sua consulta no dia ${consultas[i].dataDaConsulta}. Por favor, acuse o recebimento deste-email.`)
      } else {
         mensagens.push(`Olá, ${consultas[i].genero == "masculino" ? "Sr." : "Sra."} ${consultas[i].nome}. Infelizmente sua consulta marcada para o dia ${consultas[i].dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`);
      }
   }

   console.log(mensagens)
   return mensagens;
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   const clientes = contas.map(element => {
      for (let i = 0; i < element.compras.length; i++) {
         element.saldoTotal -= element.compras[i];
      }
      return element;
   })

   return clientes;
}