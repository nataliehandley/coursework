//ASSIGN VALUES TO LETTER SQUARES

const squareLetter = document.querySelectorAll(".square");

squareLetter[0].value = "A";
squareLetter[1].value = "B";
squareLetter[2].value = "C";
squareLetter[3].value = "D";
squareLetter[4].value = "E";
squareLetter[5].value = "F";
squareLetter[6].value = "G";
squareLetter[7].value = "H";
squareLetter[8].value = "I";
squareLetter[9].value = "J";
squareLetter[10].value = "K";
squareLetter[11].value = "L";
squareLetter[12].value = "M";
squareLetter[13].value = "N";
squareLetter[14].value = "O";
squareLetter[15].value = "P";
squareLetter[16].value = "Q";
squareLetter[17].value = "R";
squareLetter[18].value = "S";
squareLetter[19].value = "T";
squareLetter[20].value = "U";
squareLetter[21].value = "V";
squareLetter[22].value = "W";
squareLetter[23].value = "X";
squareLetter[24].value = "Y";
squareLetter[25].value = "Z";

//TAKE INPUT FROM CLICK TO DETERMINE WHICH LETTER IS CLICKED
let clickedLetter;
function letterClicked () {
    for (var i = 0; i < squareLetter.length; i++) {
        squareLetter[i].addEventListener("click", (event) => {
    clickedLetter = event.target.value;
   correctLetter();
})
}

}
letterClicked();

//SEE IF LETTER CLICKED IS THE CORRECT LETTER
function correctLetter () {
    if (clickedLetter === "A") {
        alert("Correct Answer!");

    } else {
        alert("Try again!");
    }
}
correctLetter();

//INSERT IMAGE USING JAVASCRIPT (GOOGLED THIS)
var img = document.createElement("img");
img.src = "./Images/A.jpeg";
var src = document.getElementById("main-image");
src.appendChild(img);


//SELECTS RANDOM LETTER FROM ALPHABET (GOOGLED THIS)
let selected;
var imagesArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function randomLetter() {
    let selectedLetter = Math.floor(Math.random() * imagesArray.length);
    selected = imagesArray[selectedLetter]
    imagesArray = imagesArray.slice(0, selected).concat(imagesArray.slice(selected + 1));
    console.log(selected);
}

randomLetter();

//CONSOLE LOG RANDOM LETTER ON CLICK OF NEXT BUTTON
var button = document.querySelector("#next-letter");
button.addEventListener("click", () => {
    randomLetter();
    changeImage();

})

//SWITCH FUNCTION TO CHANGE IMAGE TO CORRESPOND WITH LETTER SELECTED
function changeImage() {
switch(selected) {
    case "B":
        img.src = "./Images/B.jpeg";
        document.getElementById("h1-text").innerHTML = "BALL";
        break;
        default:
            img.src = "./Images/A.jpeg";

}
}
changeImage();