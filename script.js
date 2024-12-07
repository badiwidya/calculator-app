/* DOM Variable */

const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const clearAll = document.querySelector("#clearall");
const inputArea = document.querySelector("#input-buttons");

/* Global Varibale */
let expression = {
  currentInput: '',
  operator: null,
  previousInput: null,
}

/* Event Listener */
clear.addEventListener("click", clearDisplay);
clearAll.addEventListener("click", clearAll);
inputArea.addEventListener("click", (e) => {
  mainCalculator(e);
})

/* Function */
function mainCalculator(e, exp = expression) {
  const userInput = getUserInput(e);
  if (userInput.class.contains('operand')) {

  } else if (userInput.class.contains('operator')) {
    switch (userInput.id) {
      
    }
  }
}

function setDisplay(exp) {
  display.textContent = exp;
}

function clearDisplay() {
  display.textContent = "0";
}

function clearAll(obj) {
  obj.currentInput = '';
  obj.operator = null;
  obj.previousInput = null;
  clearDisplay();
}
// use .contains(args)
function getUserInput(e) {
  const inputDetail = {
    class: e.target.classList,
    id: e.target.id,
  }
  return inputDetail;
}

function operate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    case 'modulus':
      return modulus(a, b);
  }
}

function add(a, b) {
  const result = a + b;
  return formatNumber(result);
}

function subtract(a, b) {
  const result = a - b;
  return formatNumber(result);
}

function multiply(a, b) {
  const result = a * b;
  return formatNumber(result);
}

function divide(a, b) {
  const result = a/b;
  return formatNumber(result);
}

function modulus(a, b) {
  const result = a % b;
  return formatNumber(result);
}

function percent(a) {
  const result = a / 100;
  return formatNumber(result);
}

function formatNumber(num) {
  return Number(num.toFixed(4)).toString();
}