//Getting HTML element reference
const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const displayEl = document.querySelector(".display");
const equalEl = document.querySelector(".equal");
let buttonEl = document.querySelectorAll(".button");
let operatorEl = document.querySelectorAll(".button-operator");

//values of each number button
buttonEl[11].value = 0;
buttonEl[8].value = 1;
buttonEl[9].value = 2;
buttonEl[10].value = 3;
buttonEl[5].value = 4;
buttonEl[6].value = 5;
buttonEl[7].value = 6;
buttonEl[2].value = 7;
buttonEl[3].value = 8;
buttonEl[4].value = 9;

//values of each operator button
operatorEl[4].value = "+";
operatorEl[3].value = "-";
operatorEl[2].value = "*";
operatorEl[1].value = "/";
// operatorEl[5].value = "=";
operatorEl[0].value = "ac";

//function to get value from button clicked
let buttonValue;
let calculateResult = [];
let firstValue;
let displayValue;

function numberClicked() {
  for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", (event) => {
      buttonValue = event.target.value; //console.log each button pressed and its value
      displayValue = 0;
      calculateResult.push(buttonValue); //add button value to an array called calculateResult
      firstValue = parseInt(calculateResult.join("")); //join the numbers together to make a multiple digit number eg 2,2 is 22
      console.log(firstValue);
      displayValue = firstValue;
      displayEl.innerHTML = firstValue; //changes the display value from 0 to the first value
    });
  }
}
numberClicked();

//function to get value from operator clicked
let operatorValue;
let newCalculateResult = [];
let newFirstValue;
let calculationArray = [];

function operatorClicked() {
  for (var i = 0; i < operatorEl.length; i++) {
    operatorEl[i].addEventListener("click", (event) => {
      operatorValue = event.target.value; //gets the value of the operator button clicked
      displayEl.innerHTML = operatorValue; //changes the display value to show the operator value
      calculationArray.push(displayValue); //adding the first value to the calculation array
      console.log(displayValue);
      calculationArray.push(operatorValue); //adding the operator to the calculation array
      console.log(calculationArray);
      for (var i = 0; i < buttonEl.length; i++) {
        //had to call the numberClicked() function again
        //within operatorClicked() as I don't quite understand how to make it work any other way!
        buttonEl[i].addEventListener("click", (event) => {
          buttonValue = event.target.value;
          newCalculateResult.push(buttonValue);
          newFirstValue = parseInt(newCalculateResult.join(""));
          console.log(newFirstValue);
          displayEl.innerHTML = newFirstValue;
        });
      }
    });
  }
}

operatorClicked();

//function to get result from calculation when the equals button is clicked
let finalResult;
function equalClicked() {
  equalEl.addEventListener("click", () => {
    if (calculationArray[1] === "+") {
      finalResult = calculationArray[0] + newFirstValue;
      console.log(finalResult);
    } else if (calculationArray[1] === "-") {
      finalResult = calculationArray[0] - newFirstValue;
      console.log(finalResult);
    } else if (calculationArray[1] === "/") {
      finalResult = calculationArray[0] / newFirstValue;
      console.log(finalResult);
    } else if (calculationArray[1] === "*") {
      finalResult = calculationArray[0] * newFirstValue;
      console.log(finalResult);
    }
    displayEl.innerHTML = finalResult;
  });
}

equalClicked();

//function to clear the display when the AC button is clicked
function clearDisplay() {
  operatorEl[0].addEventListener("click", () => {
    if (displayValue != 0) {
      displayEl.innerHTML = 0;
      displayValue = 0;
    }
  });
}
clearDisplay();

//Ash's code
// let firstValue;
// let secondValue;
// let operator;
//let result
//When operator pressed
// 500 -> firstValue, operator = whatever operator was pressed

// user puts in second number
// 200

// user pressed equals
// 200 -> secondValue,
// if(operator === "+"){
//result = firstValue + secondValue
// display.innerhtml === result
//}
