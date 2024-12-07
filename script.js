const clear = document.querySelector("#clear");
const display = document.querySelector("#display");

/* Event Listener */
clear.addEventListener("click", clearDisplay);

/* Function */
function clearDisplay() {
  display.textContent = "0";
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
