import multiplicar from "./multiplicador";
import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const resultMult = document.querySelector("#resultado-mult")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const multNum1 = document.querySelector("#mult-numero1");
const multNum2 = document.querySelector("#mult-numero2");
const multForm = document.querySelector("#multiplicador-form");
const resultadoMult = document.querySelector("#resultado-mult")

multForm.addEventListener("submit", (event) =>{
  event.preventDefault();

  const firstNumberMult = Number.parseInt(multNum1.value);
  const secondNumberMult = Number.parseInt(multNum2.value);

  resultadoMult.innerHTML = "<p>" + multiplicar(firstNumberMult,secondNumberMult) + "</p>";
});