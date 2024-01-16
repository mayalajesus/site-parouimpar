let saida = document.querySelector('.play1');
let input = document.getElementById('num');
let botao = document.querySelector('.jogar');
let parImpar1 = document.getElementsByClassName('parImpar')[0];
let parImpar2 = document.getElementsByClassName('parImpar')[1];
let resultado = document.querySelector('.resultado');
let resultadoPlay1 = document.querySelector('.resultadoPlay1');
let resultadoPlay2 = document.querySelector('.resultadoPlay2');


let isParSelected = false;
let isImparSelected = false;

parImpar1.addEventListener('click', function () {
  parImpar1.style.backgroundColor = "#159A9C";
  parImpar2.style.backgroundColor = "#DEEFE7";
  isParSelected = true;
  isImparSelected = false;
});

parImpar2.addEventListener('click', function () {
  parImpar1.style.backgroundColor = "#DEEFE7";
  parImpar2.style.backgroundColor = "#159A9C";
  isParSelected = false;
  isImparSelected = true;
});

botao.addEventListener('click', function () {
  if (!isParSelected && !isImparSelected) {
    alert("Selecione Par ou Ímpar antes de jogar!");
    return;
  }

  if (input.value < 0 || input.value > 10) {
    alert("Escolha um número entre 0 e 10");
    return;
  }


  let numRandom = Math.floor(Math.random() * 11); // gera um novo número aleatório
  let sum = parseInt(input.value) + numRandom;

  if ((sum % 2 === 0 && isParSelected) || (sum % 2 !== 0 && isImparSelected)) {
    resultado.innerHTML = 'Você ganhou!';
    resultadoPlay1.innerHTML = 'Você: ' + input.value;
    resultadoPlay2.innerHTML = 'Player2: ' + numRandom;
  } else {
    resultado.innerHTML = 'Você perdeu!';
    resultadoPlay1.innerHTML = 'Você: ' + input.value;
    resultadoPlay2.innerHTML = 'Player2: ' + numRandom;
  }
});
