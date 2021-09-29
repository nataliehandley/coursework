//Getting HTML element reference
const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const displayEl = document.querySelector(".display");
const equalEl = document.querySelector('.equal');
const buttonEl = document.querySelectorAll(".button");
const operatorEl = document.querySelectorAll(".button-operator");

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
operatorEl[3].value = "-"
operatorEl[2].value = "*";
operatorEl[1].value = "/";
// operatorEl[5].value = "=";
operatorEl[0].value = "ac"


//function to get value from button clicked
let buttonValue;
let calculateResult =[];
let firstValue;
let displayValue;

function numberClicked() {
    for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", (event) => {
        buttonValue = event.target.value;//console.log each button pressed and its value
        displayValue = 0;
        calculateResult.push(buttonValue);
        firstValue = parseInt(calculateResult.join(""));
        console.log(firstValue);
        displayValue = firstValue;
        displayEl.innerHTML = firstValue;
    })}}
    numberClicked();

//function to get value from operator clicked
    let operatorValue;
    let newCalculateResult = [];
    let newFirstValue;
    let calculationArray = [];
   
    function operatorClicked() {
        for (var i = 0; i < operatorEl.length; i++) {
            operatorEl[i].addEventListener("click", (event) => {
                operatorValue = event.target.value;
               displayEl.innerHTML = operatorValue;
                calculationArray.push(displayValue);
                calculationArray.push(operatorValue);
                console.log(calculationArray);
                for (var i = 0; i < buttonEl.length; i++) {
                    buttonEl[i].addEventListener("click", (event) => {
                        buttonValue = event.target.value;//console.log each button pressed and its value
                        newCalculateResult.push(buttonValue);
                        newFirstValue = parseInt(newCalculateResult.join(""));
                        console.log(newFirstValue);
                        displayEl.innerHTML = newFirstValue;
                }
                    )}}
            )}}

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

    })}

    equalClicked();

    //function to clear the display when the AC button is clicked, unfortunatly this isnt working yet!
    // function clearDisplay() {
    //     operatorEl[0].addEventListener("click", () => {
    //       displayValue = 0;
    //       firstValue = undefined;
    //       displayEl.innerHTML = 0;
    //       newFirstValue = undefined;
    //       newCalculateResult = [];
    //       calculationArray = [];
    //       calculateResult = [];
    //       console.log(calculateResult);
    //       numberClicked();
  
    //     })
    //   }
    //   clearDisplay();

   
    //add comments
    //clear display
    //https://medium.com/@wbl.pauline/how-to-build-a-calculator-using-javascript-no-more-than-100-lines-of-js-code-b9bd087a14e8