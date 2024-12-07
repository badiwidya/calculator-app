/* DOM Variable */

const clearEntry = document.querySelector("#clear");
const display = document.querySelector("#display");
const clear = document.querySelector("#clearall");
const inputArea = document.querySelector("#input-buttons");

/* Global Varibale */
let expression = {
  currentInput: "",
  operator: null,
  previousInput: null,
};

/* Event Listener */
clearEntry.addEventListener("click", clearDisplay);
clear.addEventListener("click", clearAll);
inputArea.addEventListener("click", (e) => {
  mainCalculator(e);
});

/* Function */
function mainCalculator(e) {
  const userInput = getUserInput(e);
  if (userInput.class.contains("operand")) {
    if (expression.currentInput.length < 8) {
      expression.currentInput += userInput.id;
      setDisplay(expression.currentInput);
    }
  } else if (userInput.class.contains("operator")) {

    //? So the function works like, if you have a number in memory, operate it first.
    //? If not, set the operator and put currentInput to the previousInput.

    if (expression.previousInput && expression.operator) {
      const result = operate(expression.previousInput, expression.currentInput, expression.operator);
      expression.previousInput = null;
      expression.currentInput = result;
      setDisplay(expression.currentInput);
    }
    expression.operator = userInput.id;
    expression.previousInput = expression.currentInput;
    expression.currentInput = "";
  } else if (userInput.class.contains("calculate")) {
  }
}

function operatorProcess(operator, exp = expression) {}

function setDisplay(exp) {
  if (exp.length > 8) {
    display.textContent = parseFloat(exp).toExponential(3);
    return;
  }
  display.textContent = exp;
}

function clearDisplay() {
  expression.currentInput = "";
  display.textContent = "0";
}

function clearAll() {
  expression.currentInput = "";
  expression.operator = null;
  expression.previousInput = null;
  clearDisplay();
}
// use .contains(args)
function getUserInput(e) {
  const inputDetail = {
    class: e.target.classList,
    id: e.target.id,
  };
  return inputDetail;
}

function operate(num1, num2, operation) {
  const a = Number(num1);
  const b = Number(num2);
  switch (operation) {
    case "plus":
      return add(a, b);
    case "minus":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    case "modulus":
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
  const result = a / b;
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
