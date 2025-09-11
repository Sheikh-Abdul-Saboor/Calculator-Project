const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function clearLastNumber() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// 🎹 Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Allow numbers and basic operators
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendToDisplay(key);
  }

  // Enter = calculate
  if (key === "Enter") {
    calculate();
  }

  // Backspace = delete last character
  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // Escape = clear all
  if (key === "Escape") {
    clearDisplay();
  }
});

