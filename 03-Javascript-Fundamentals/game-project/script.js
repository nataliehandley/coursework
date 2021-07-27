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

function correctLetter () {
    if (clickedLetter === "A") {
        console.log("Correct Answer!");
    } else {
        console.log("Try again!");
    }
}
correctLetter();
