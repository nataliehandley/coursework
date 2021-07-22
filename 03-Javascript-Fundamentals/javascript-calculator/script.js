function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;
let inputValue = 65 - currentAge
    alert(inputValue);
}

function translateIntoFrench(event) {
    const inputWord = event.target.value;
    if (inputWord == "Hello") {
        alert("Bonjour");
    } else if (inputWord == "Goodbye") {
        alert("Au Revoir");
    } else {
        alert("Word not recognised");
    }
}

function convertToDollars(event) {
    const inputPounds = event.target.value;
    let aussieDollars = inputPounds * 1.83;
    alert (aussieDollars);
}

function calculateBMI(event) {
    const inputBMI = event.target.value;
    if (inputBMI < 18.5) {
        alert("Underweight");
    } else if (inputBMI > 25 && inputBMI < 29.9) {
        alert("Overweight");
    } else if (inputBMI > 30) {
        alert ("Obese");
    } else {
        alert ("Healthy weight");
    }
}
