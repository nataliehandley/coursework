
function getDescription (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    console.log("I am currently a " + jobTitle + " living in " + geographicLocation + ", and married to " + partnersName + " with "+ numberOfChildren + " kids");

}
getDescription(3, "Bob", "London", "architect");
getDescription(4, "Bill", "Scotland", "farmer");
getDescription(2, "Peter", "Australia", "dentist");

function calculateSupply (age, amountOfPerDay) {
    //max age = 81 years
    //amountPerDay (2) * 356
    let amount = Math.round((81 - age) * (amountOfPerDay * 356));
    console.log(`You will need ${amount} to last you until the ripe old age of 81`);
}
calculateSupply(20, 2);
calculateSupply(80, 1.3);
calculateSupply(42, 10);

function celsiusToFarenheitConverter (temperatureInCelsius) {
    
    let temperatureInFarenheit = ((temperatureInCelsius/5) * 9) + 32;
    console.log(`The temperature in Farenheit is ${temperatureInFarenheit} degrees`);
}

celsiusToFarenheitConverter(32);

function dogYearsCalculator (humanYears) {
    let ageInDogYears = humanYears * 15;
    console.log(`The age of your puppy is ${ageInDogYears}`);
}
dogYearsCalculator(2);
dogYearsCalculator(0.5);