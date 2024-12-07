const clear = document.querySelector("#clear");
const display = document.querySelector("#display");

/* Event Listener */
clear.addEventListener("click", clearDisplay);

/* Function */
function clearDisplay() {
  display.textContent = "0";
}
