//tipo primitivos

//boolean
var VouF = false;
console.log(VouF);
console.log(typeof VouF);

//number
var numeroQualquer = 1;
console.log(typeof numeroQualquer);

//string
var nome = "Diana";
console.log(typeof nome);
console.log(nome);

//como declarar
var variavel = "Pedro";
var variavel = "João";
console.log(variavel);

let variavel2 = "Diana";
console.log(variavel2);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = "local";
  console.log(escopoLocalInterno);
}
escopoLocal();

function carro() {
  var carroAzul = "corsa";
  console.log("corsa");
}
carro();

var comparacao = 0 == 0;
console.log(comparacao);

//Operadores == adição
var adicao, num1, num2;
num1 = 2;
num2 = 4;
adicao = num1 + num2;

console.log(adicao);

//Operadores Subtração
var resultado, num1, num2;
num1 = 3;
num2 = 5;
resultado = num1 - num2;
console.log(resultado);

let array = ["gol", "corsa", "celta"];
console.log(array);
length;
