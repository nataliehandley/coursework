/*const coaches = ["Andy", "Ollie", "Charlie", "Matt", "Bex", "Sam"];
console.log(coaches[1]);

const pets = ["Fido", "Rusty", "Jack"];
console.log(pets[2]);

//for (let index = 0; index < 5; index++) {
  //  console.log("The index on this loop was " + index);
//}
//const coaches = ["Andy", "Ollie", "Charlie", "Matt", "Bex", "Sam"];
//for (let index = 0; index < coaches.length; index++) {
  //  console.log(coaches[index]);
//}

pets.forEach((pet) => {
  console.log(pet);

})

coaches.forEach((coach) => {
  console.log(coach);
})

const newCoaches = coaches.map((coach) => {
  return "Coach" + coach;
})

console.log(newCoaches);

const newPets = pets.map((pet) => {
  return "Pet" + pet;
})

console.log(newPets);

const newPetsUpper = pets.map((pet) => {
  return pet.toUpperCase();
})

console.log(newPetsUpper);*/

const names = ["Andy", "Sam", "Bex"];

const coaches = names.filter((name) => {
  if(name.length > 3) {
    return true;
  } else {
    return false;
  }
})
console.log(coaches);

const scores = [8, 9, 12];
const highScores = scores.filter((score) => {
  if(score > 10) {
    return true;
  } else {
    return false;
  }
})
console.log(highScores);
