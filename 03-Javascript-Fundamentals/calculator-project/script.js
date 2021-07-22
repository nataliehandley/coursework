
//Getting HTML element reference
const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const displayEl = document.querySelector(".display");
const equalEl = document.querySelector('.equal');
const buttonEl = document.querySelectorAll(".button");
const operatorEl = document.querySelectorAll(".button-operator");

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

operatorEl[4].value = "+";
operatorEl[3].value = "-"
operatorEl[2].value = "*";
operatorEl[1].value = "/";
operatorEl[5].value = "=";
operatorEl[0].value = "ac"




let buttonValue;
var calculateResult =[];
displayEl.innerHTML = 0;
function numberClicked() {
    for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", (event) => {
        buttonValue = event.target.value;
        console.log(buttonValue);
        displayEl.innerHTML = buttonValue;
        calculateResult.push(displayEl.innerHTML);
        console.log(calculateResult);
       
       
})
}
}
numberClicked();

 let operatorValue;
function operatorClicked() {
    for (var i = 0; i < operatorEl.length; i++) {
        operatorEl[i].addEventListener("click", (event) => {
        operatorValue = event.target.value;
        console.log(operatorValue);
        displayEl.innerHTML = operatorValue;
        calculateResult.push(displayEl.innerHTML);
        console.log(calculateResult);
        
})
}
}
 operatorClicked();
 

let finalResult;
function equalClicked() {
        operatorEl[5].addEventListener("click", () => {
          if (calculateResult[1] === "+") {
            finalResult = parseInt(calculateResult[0]) + parseInt(calculateResult[2]);
            console.log(finalResult);
          } else if (calculateResult[1] === "-") {
            finalResult = parseInt(calculateResult[0]) - parseInt(calculateResult[2]);
            console.log(finalResult);
          } else if (calculateResult[1] === "/") {
            finalResult = parseInt(calculateResult[0]) / parseInt(calculateResult[2]);
            console.log(finalResult);
          } else if (calculateResult[1] === "*") {
            finalResult = parseInt(calculateResult[0]) * parseInt(calculateResult[2]);
            console.log(finalResult);
          }
          displayEl.innerHTML = finalResult;
        })
    }
    equalClicked();

    function clearDisplay() {
      operatorEl[0].addEventListener("click", () => {
        calculateResult = [];
        displayEl.innerHTML = 0;

      })
    }
    clearDisplay();

















// // equalEl.addEventListener("click", () => {
// //   displayEl.innerHTML="hello";
// // })

// // buttonEl[7].addEventListener("click", (event) => {
// //   const firstInput = event.target.value;
// //   displayEl.innerHTML = firstInput;
// //  let calculatorArray = [firstInput];
// //   console.log(calculatorArray);
// // })


// // buttonEl[9].addEventListener("click", (event) => {
// //   const secondInput = event.target.value;
// //   console.log(secondInput);
// //   //displayEl.innerHTML =+ secondInput;
// //   calculatorArray = [firstInput, secondInput];
  
// // })
