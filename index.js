//questão 1 - loops
// Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

// const produto = Number(prompt("Qual o valor do seu produto? "));
// let etiqueta;
// let verfificar = true;

// const descontVerde = produto * 0.1;
// const descontAmarelo = produto * 0.2;
// const descontAzul = produto * 0.3;
// const descontVermelho = produto * 0.4;
// do {
//   etiqueta = prompt(
//     "Informe se a cor da sua etiqueta é: verde, azul, vermelha ou amarela "
//   ).toLowerCase();
//   if (etiqueta === "verde") {
//     console.log(
//       `Você escolheu a cor verde numa compra de ${produto} e o valor do seu desconto é ${descontVerde}`
//     );
//     verfificar = false;
//   } else if (etiqueta === "amarelo") {
//     console.log(
//       `Você escolheu a cor amarela numa compra de ${produto} e o valor do seu desconto é ${descontAmarelo}`
//     );
//     verfificar = false;
//   } else if (etiqueta === "azul") {
//     console.log(
//       `Você escolheu a cor azul numa compra de ${produto} e o valor do seu desconto é ${descontAzul}`
//     );
//     verfificar = false;
//   } else if (etiqueta === "vermelho") {
//     console.log(
//       `Você escolheu a cor vermelha numa compra de ${produto} e o valor do seu desconto é ${descontVermelho}`
//     );
//     verfificar = false;
//   } else {
//     alert("escolha uma das cores válidas por favor ");
//   }
// } while (verfificar);

// Crie um programa que peça ao usuário para digitar uma senha. Continue pedindo a senha até que o usuário digite "1234". Use um laço do…while para controlar as tentativas e, quando a senha correta for inserida, exiba a mensagem "Acesso Permitido".

// let senha = prompt("Qual sua senha?");
// do {
//   if (senha === "1234") {
//     console.log(`Acesso permitido`);
//   } else if (senha != "1234") {
//     senha = prompt("Senha incorreta, tente novamente ");
//     console.log("acesso permitido");
//   }
// } while (senha != "1234");
// exercicio 3
//  Você precisa criar um programa que ajude a calcular a média de notas de uma turma.(variavel) O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar a nota de cada aluno. (mecanismo de calculo )Utilize um laço for para capturar as notas e acumular a soma. Após inserir todas as notas, o programa deve calcular e exibir a média da turma.

// // for = (  variavel(opcional); condição ;  incremento;){
// //}

// let js = "javascript";

// for (let i = 0; i < js.length; i++) {
//   console.log(js[i]);
// }
// //array
// let frutas = ["maça", "banana", "uva", "caju"];
// let i = 0;

// for (let i = 0; i < 4; i++) {
//   console.log(frutas[i]);
// }

// const alunos = Number(prompt("Nesta sala há quantos alunos? "))
// let notas = 0

// for (let index = 1; index  <= alunos ; index++) {
//   notas += parseFloat(prompt("digite sua nota "))
// }

// const media = (notas + alunos)/alunos
// alert(`A media dos alunos é ${media}`)
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// **Cenário 1: Gerenciamento de Tarefas**

// Desenvolva um script que permita ao usuário criar uma lista de tarefas. O usuário deve ser capaz de adicionar múltiplas tarefas ao final da lista até decidir parar. Ao final da adição, a lista completa de tarefas deve ser exibida. Em seguida, o script deve perguntar se o usuário deseja remover a primeira tarefa da lista, realizando a remoção (se houver tarefas) e mostrando a lista atualizada, ou informando que não há tarefas a serem removidas
// arrays:
let tarefa = "";
const atividade = [];
let retirar = "";
do {
  tarefa = prompt(
    "Você tem alguma atividde para realizar? "
  ).toLowerCase();
  if (tarefa === "sim") {
    atividade.push(prompt("Se sim diga qual: "));
  } else {
    console.log(`Essas são suas tarefas ${atividade}`);
  }
} while (tarefa === "sim");

do {
  retirar = prompt("Você deseja retirar algo da sua lista de tarefas ?")
if (retirar === "sim") {
  atividade.shift()
}else{
  alert(`Essas são suas tarefas ${atividade}`)
}
} while (retirar === "sim");
