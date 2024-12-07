/* DOM Variable */

const clearEntry = document.querySelector("#clear");
const display = document.querySelector("#display");
const clear = document.querySelector("#clearall");
const inputArea = document.querySelector("#input-buttons");
const backspace = document.querySelector("#backspace");

/* Global Varibale */
let expression = {
  currentInput: "",
  operator: null,
  previousInput: null,
};

/* Event Listener */
clearEntry.addEventListener("click", clearDisplay);
clear.addEventListener("click", () => clearAll("content"));
backspace.addEventListener("click", undoInput);
inputArea.addEventListener("click", (e) => mainCalculator(e));

/* Function */
function mainCalculator(e) {
  const userInput = getUserInput(e);
  if (userInput.class.contains("operand")) {
    if (expression.currentInput.length < 8) {
      if (userInput.id === "dot" && !expression.currentInput.includes(".")) {
        expression.currentInput += ".";
      } else if (userInput.id !== "dot") {
        expression.currentInput += userInput.id;
      }
      setDisplay(expression.currentInput);
    }
  } else if (userInput.class.contains("operator")) {
    //? To handle percentage operation.

    if (userInput.id === "percent") {
      const numPerAHundred = percent(expression.currentInput);
      expression.currentInput = numPerAHundred;
      setDisplay(expression.currentInput);
      return;
    }

    //? So it works like, if you have a number in memory, operate it first.
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
    if (!expression.previousInput && !expression.operator) {
      setDisplay("ERROR");
      setTimeout(() => {
        setDisplay("0");
      }, 500);
    } else {
      const result = operate(expression.previousInput, expression.currentInput, expression.operator);
      expression.previousInput = null;
      setDisplay(result);
      expression.currentInput = result;
    }
  }
}

function undoInput() {
  if (expression.currentInput.length > 0) {
    const undoedInput = expression.currentInput.slice(0, -1);
    expression.currentInput = undoedInput;
    setDisplay(undoedInput);
  }
}

function setDisplay(exp) {
  if (exp?.length > 8) {
    display.textContent = parseFloat(exp).toExponential(3);
    return;
  }
  display.textContent = exp;
}

function clearDisplay() {
  expression.currentInput = "";
  display.textContent = "0";
}

function clearAll(arg) {
  expression.currentInput = "";
  expression.operator = null;
  expression.previousInput = null;
  if (arg === "content") {
    clearDisplay();
  }
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
      if (b === 0) {
        return "ERROR";
      }
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

/* Keyboard listener */

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) && expression.currentInput.length < 8) {
    expression.currentInput += e.key;
    setDisplay(expression.currentInput);
  } else if (e.key === "Backspace") {
    undoInput();
  } else if (e.key === "Enter") {
    if (!expression.previousInput && !expression.operator) {
      setDisplay("ERROR");
      setTimeout(() => {
        setDisplay("0");
      }, 500);
    } else {
      const result = operate(expression.previousInput, expression.currentInput, expression.operator);
      expression.previousInput = null;
      setDisplay(result);
      expression.currentInput = result;
    }
  }
})