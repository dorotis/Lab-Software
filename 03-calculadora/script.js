function adicionar(valor) {
  let visor = document.getElementById("visor");


  if (visor.value === "0") {
    visor.value = valor;
  } else {
    visor.value = visor.value + valor;
  }
}


// 2. Funções matemáticas isoladas
function somar(a, b) {
  return a + b;
}
function subli(a, b) {
  return a - b;
}


function multi(a, b) {
  return a * b;
}


function divi(a, b) {
  return a / b;
}
// 3. Função para identificar a conta e calcular
function calcular() {
  let visor = document.getElementById("visor");
  let texto = visor.value;


  if (texto.includes("+")) {
    let partes = texto.split("+");


    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);


    visor.value = somar(num1, num2);
  }


  if (texto.includes("-")) {
    let partes = texto.split("-");


    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);


    visor.value = subli(num1, num2);
  }


  if (texto.includes("*")) {
    let partes = texto.split("*");


    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);


    visor.value = multi(num1, num2);
  }


  if (texto.includes("/")) {
    let partes = texto.split("/");


    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);


    visor.value = divi(num1, num2);
  }




}
if (visor.value === "0") {
  visor.value = valor;
} else {
  visor.value = visor.value + valor;
}


function limpar() {
    document.getElementById("visor").value = "";
}


// ====================================================
// EXERCÍCIO 2: Continue a lógica abaixo
// ====================================================


// ====================================================
// DESAFIO 3: Crie a função limpar()
// ====================================================