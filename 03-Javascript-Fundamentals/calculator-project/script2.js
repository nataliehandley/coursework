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
// operatorEl[5].value = "=";
operatorEl[0].value = "ac"


// function startCalculator() {
//     window.addEventListener('load', () => {
//     numberClicked();
//     operatorClicked();
//     numberClicked();
//     equalClicked();
// });
// }
// startGame();


let buttonValue;
let calculateResult =[];
let displayValue;
let calculationArrayOne =[];
let pendingValue;

function numberClicked() {
    for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", (event) => {
        
        // displayValue = 0;
        // displayEl.innerHTML = 0;
        buttonValue = event.target.value;
        console.log(buttonValue);
        displayEl.innerHTML = buttonValue;
        calculateResult.push(displayEl.innerHTML);
        displayEl.innerHTML = calculateResult.join("");
       displayValue = calculateResult.join("");
       pendingValue = displayValue;
       calculationArrayOne[0] = pendingValue;
          operatorClicked();    
        


})
}
}
numberClicked();

 let operatorValue;
 
function operatorClicked() {
    for (var i = 0; i < operatorEl.length; i++) {
        operatorEl[i].addEventListener("click", (event) => {
       displayValue = 0;
       displayEl.innerHTML = 0;
        operatorValue = event.target.value;
        calculationArrayOne[1] = operatorValue;
        console.log(calculationArrayOne);
        displayEl.innerHTML = operatorValue;
        // calculateResult.push(displayEl.innerHTML);
        // alert(displayValue);
        // alert(pendingValue);
     //after operator clicked, need to reset numberclicked function to 0
  
   calculateResult = [];
   console.log(calculateResult);
   
     
    
        
        
    
        
        
        
})
}
}
 operatorClicked();

 
 
let valueTwo;
let finalResult;
let calculationArrayTwo = [];
function equalClicked() {
        equalEl.addEventListener("click", () => {
           alert(pendingValue);
           displayValue = calculateResult.join("");
           valueTwo = parseFloat(displayValue);
           calculationArrayTwo[0] = valueTwo;
           console.log(calculateResult);
           console.log(calculationArrayTwo);
           console.log(calculationArrayOne);
           
       if (calculationArrayOne[1] === "+") {
            finalResult = parseFloat(calculationArrayOne[0]) + parseFloat(calculationArrayTwo[0]);
            alert(finalResult);
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




    //have an overall function with
    //window onload
    //if number button clicked...
    //calls numberClicked()
    //if operator button clicked...
    //calls operator clicked
    //if equals sign clicked..
    //calls calculate function