function handleCalculateGrade(event) {
    let grade = event.target.value;
    grade = grade.toUpperCase();
    let percentage;

    if(!grade) return;

    switch(grade) {
        case "A": 
        percentage = "90-100%";
        break;
        case "B": 
        percentage = "75-90%";
        break;
        case "C": 
        percentage = "50-75%";
        break;
        case "D": 
        percentage = "25-50%";
        break;
        case "E": 
        percentage = "0-25%";
        break;
    }
    alert("The percentage was " + percentage);
   
}


function handlePositiveOrNegative(event) {

    let inputOne = event.target.value;
    if (inputOne < 0) { 
        alert ("the number is NEGATIVE");
    } else {
        alert ("the number is POSITIVE");
    }
}


function greatestNumber() {
let numberOne = 2;
let numberTwo = 10;
let numberThree = 5;

if (numberOne > (numberTwo && numberThree)) {
    alert (numberOne + "is the greatest number");
} else if (numberTwo > (numberOne && numberThree)) {
    alert (numberTwo + "is the greatest number");
} else {
    alert (numberThree + "is the greatest number");
}
}
greatestNumber();




function calculateDaysUntilWeekend(event) {
    let day = event.target.value;
    let daysUntil;

    switch(day) {
        case "Monday":
            daysUntil = "4";
            alert(daysUntil + " days left until the weekend!")
            break;
        case "Tuesday":
            daysUntil = "3";
            alert(daysUntil + " days left until the weekend!")
            break;
        case "Wednesday":
            daysUntil = "2";
            alert(daysUntil + " days left until the weekend!")
            break;
        case "Thursday":
            daysUntil = "1";
            alert(daysUntil + " days left until the weekend!")
            break;   
        case "Friday":
            daysUntil = "0";
            alert(daysUntil + " days left until the weekend!")
            break;
        default: 
            alert("Sorry we didnt recognise that day");
            break;
    }
}


function calculateVegetablePrice(event) {
    let vegetable = event.target.value;
    let price;

    switch(vegetable) {
        case "Potato":
        case "Carrots":
            price = "78p";
            alert("the price is " + price);
            break
        case "Broccoli" :
            price = "88p";
            alert("the price is " + price);
            break
        case "Cabbage" :
            price = "58p";
            alert("the price is " + price);
            break
        case "Asparagus" :
            price = "98p"
            alert("the price is " + price);
            break;
        default:
           alert("Sorry we didnt recognise that vegetable");
    }
}