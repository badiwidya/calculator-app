/* DOM Variable */

const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const clearAll = document.querySelector("#clearall");

/* Global Varibale */
let expression = {
  currentInput: '',
  operator: null,
  previousInput: null,
}

/* Event Listener */
clear.addEventListener("click", clearDisplay);
clearAll.addEventListener("click", clearAll);

/* Function */
function clearDisplay() {
  display.textContent = "0";
}

function clearAll(obj) {
  obj.currentInput = '';
  obj.operator = null;
  obj.previousInput = null;
  clearDisplay();
}

function getUserInput(e) {
  return e.target.id;
}

function operate(operation) {
}

function add(a, b) {
}

function subtract(a, b) {
}

function multiply(a, b) {
}

function divide(a, b) {
}

function modulus(a, b) {
}
