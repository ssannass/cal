const calculator = {
    display: document.querySelector("#display"),
    btns: document.querySelectorAll("button"),
    operator: "",
    firstValue: "",
    secondValue: "",
    operatorClicked: false,
  };
  
  // Add event listeners to all buttons
  calculator.btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      calculator.input(e.target.innerText);
    });
  });
  
  calculator.input = (input) => {
    if (isNaN(input)) {
      // Handle operator input
      if (input === "AC") {
        calculator.clear();
      } else if (input === "=") {
        calculator.calculate();
      } else if (input === "⌫") {
        calculator.backspace();
      } else {
        calculator.handleOperator(input);
      }
    } else {
      // Handle number input
      if (calculator.operatorClicked) {
        calculator.secondValue += input;
        calculator.display.value = calculator.secondValue;
      } else {
        calculator.firstValue += input;
        calculator.display.value = calculator.firstValue;
      }
    }
  };
  
  calculator.handleOperator = (input) => {
    calculator.operator = input;
    calculator.operatorClicked = true;
  };
  
  calculator.calculate = () => {
    let result = 0;
    switch (calculator.operator) {
      case "+":
        result = parseFloat(calculator.firstValue) + parseFloat(calculator.secondValue);
        break;
      case "-":
        result = parseFloat(calculator.firstValue) - parseFloat(calculator.secondValue);
        break;
      case "x":
        result = parseFloat(calculator.firstValue) * parseFloat(calculator.secondValue);
        break;
      case "÷":
        result = parseFloat(calculator.firstValue) / parseFloat(calculator.secondValue);
        break;
      case "%":
        result = parseFloat(calculator.firstValue) % parseFloat(calculator.secondValue);
        break;
    }
    calculator.display.value = result;
    calculator.clear();
  };
  
  calculator.clear = () => {
    calculator.firstValue = "";
    calculator.secondValue = "";
    calculator.operator = "";
    calculator.operatorClicked = false;
  };
  
  calculator.backspace = () => {
    if (calculator.operatorClicked) {
      calculator.secondValue = calculator.secondValue.slice(0, -1);
      calculator.display.value = calculator.secondValue;
    } else {
      calculator.firstValue = calculator.firstValue.slice(0, -1);
      calculator.display.value = calculator.firstValue;
    }
  };
  