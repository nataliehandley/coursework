
//START GAME ON CLICK OF START ALPHABET GAME BUTTON https://www.w3schools.com/jsref/met_document_createelement.asp

function startGame() {
    window.addEventListener('load', () => {
    document.getElementById("container").style.display = "none";
    let btn = document.createElement("button");
    btn.innerHTML = "Start the Alphabet Game! ⏯️";
    document.body.appendChild(btn);
    let instructions = document.createElement("p");
    instructions.innerHTML = "Click on the correct letter to gain stars!🌟";
    document.body.appendChild(instructions);

    btn.addEventListener("click", () => {
    document.getElementById("container").style.display = "";
    btn.style.display = "none";
    instructions.style.display = "none";

})
});
}
startGame();

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

//SWITCH FUNCTION TO CHANGE IMAGE TO CORRESPOND WITH RANDOM LETTER
function changeImage() {
switch(selected) {
    case "A":
        img.src = "./Images/A.jpeg";
        document.getElementById("h1-text").innerHTML = "APPLE";
        break;
    case "B":
        img.src = "./Images/B.jpeg";
        document.getElementById("h1-text").innerHTML = "BALL";
        break;
    case "C":
        img.src = "./Images/C.jpeg";
        document.getElementById("h1-text").innerHTML = "CAT";
        break;
    case "D":
        img.src = "./Images/D.jpeg";
        document.getElementById("h1-text").innerHTML = "DOG";
        break;
    case "E":
        img.src = "./Images/E.jpeg";
        document.getElementById("h1-text").innerHTML = "EGG";
        break;
    case "F":
        img.src = "./Images/F.jpeg";
        document.getElementById("h1-text").innerHTML = "FISH";
        break;
    case "G":
        img.src = "./Images/G.jpeg";
        document.getElementById("h1-text").innerHTML = "GOAT";
        break;
    case "H":
        img.src = "./Images/H.jpeg";
        document.getElementById("h1-text").innerHTML = "HAT";
        break;
    case "I":
        img.src = "./Images/I.jpeg";
        document.getElementById("h1-text").innerHTML = "IGLU";
        break;
    case "J":
        img.src = "./Images/J.jpeg";
        document.getElementById("h1-text").innerHTML = "JAM";
        break;
    case "K":
        img.src = "./Images/K.jpeg";
        document.getElementById("h1-text").innerHTML = "KITE";
        break;
    case "L":
        img.src = "./Images/L.jpeg";
        document.getElementById("h1-text").innerHTML = "LION";
        break;
    case "M":
        img.src = "./Images/M.jpeg";
        document.getElementById("h1-text").innerHTML = "MONKEY";
        break;
    case "N":
        img.src = "./Images/N.jpeg";
        document.getElementById("h1-text").innerHTML = "NUT";
        break;
    case "O":
        img.src = "./Images/O.jpeg";
        document.getElementById("h1-text").innerHTML = "ORANGE";
        break;
    case "P":
        img.src = "./Images/P.jpeg";
        document.getElementById("h1-text").innerHTML = "PIG";
        break;
    case "Q":
        img.src = "./Images/Q.jpeg";
        document.getElementById("h1-text").innerHTML = "QUEEN";
        break;
    case "R":
        img.src = "./Images/R.jpeg";
        document.getElementById("h1-text").innerHTML = "ROCKET";
        break;
    case "S":
        img.src = "./Images/S.jpeg";
        document.getElementById("h1-text").innerHTML = "SNAKE";
        break;
    case "T":
        img.src = "./Images/T.jpeg";
        document.getElementById("h1-text").innerHTML = "TREE";
        break;
    case "U":
        img.src = "./Images/U.jpeg";
        document.getElementById("h1-text").innerHTML = "UMBRELLA";
        break;
    case "V":
        img.src = "./Images/V.jpeg";
        document.getElementById("h1-text").innerHTML = "VAN";
        break;
    case "W":
        img.src = "./Images/W.jpeg";
        document.getElementById("h1-text").innerHTML = "WATCH";
        break;
    case "X":
        img.src = "./Images/X.jpeg";
        document.getElementById("h1-text").innerHTML = "XRAY";
        break;
    case "Y":
        img.src = "./Images/Y.jpeg";
        document.getElementById("h1-text").innerHTML = "YOYO";
        break;
    case "Z":
        img.src = "./Images/Z.jpeg";
        document.getElementById("h1-text").innerHTML = "ZOO";
        break;
        default:
            img.src = "./Images/A.jpeg";

}
}
changeImage();

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

//CREATE CORRECT OR INCORRECT MODAL POP UP https://sabe.io/tutorials/how-to-create-modal-popup-box
//used setTimeout to close modal box after 3 seconds automatically rather than needing to click

const modal = document.querySelector(".modal");
   
    function toggleModal() {
        modal.classList.toggle("show-modal");
        setTimeout(closeModal, 1000);
    }
    
    function closeModal() {
        modal.classList.toggle("show-modal");
    }

//SEE IF LETTER CLICKED IS THE CORRECT LETTER
let score = 0;
function correctLetter () {
    if (clickedLetter === selected) {
        document.querySelector(".modal-content").innerHTML = "👍Right answer!  Hooray!😇";
        modal.style.backgroundColor = "#E4F2E6";
        document.querySelector(".modal-content").style.color = "#3AA075";
        toggleModal();
        randomLetter();
        changeImage();
        score = score + 1;
        document.querySelector(".square-score").innerHTML = score;
        document.querySelector(".square-score").style.color = "red";
    } else {
        document.querySelector(".modal-content").innerHTML = "👎Wrong answer, try again!   🙁";
        document.querySelector(".modal-content").style.color = "#D75760";
        modal.style.backgroundColor = "#FA8C9A";
        toggleModal();  
    }
   if(score === 5){
    levelTwo();
   }
   if(score ===10) {
       endGame();
   }
}

//KEEP SCORE, MOVE TO LEVEL 2

function levelTwo () {
    document.getElementById("container").style.display = "none";
    let btn = document.createElement("button");
    btn.innerHTML = "Start Level 2! ⏯️";
    document.body.appendChild(btn);
    let instructions = document.createElement("p");
    instructions.innerHTML = "Reach 10 stars 🌟 to complete the game!";
    document.body.appendChild(instructions);

    btn.addEventListener("click", () => {
        document.getElementById("container").style.display = "";
        btn.style.display = "none";
        instructions.style.display = "none";
        document.getElementById("h1-text").style.display = "none";     
    })
}

//END GAME ONCE FINAL SCORE REACHED

function endGame() {
    document.getElementById("container").style.display = "none";
    let btn = document.createElement("button");
    btn.innerHTML = "Completed!";
    document.body.appendChild(btn);
    let instructions = document.createElement("p");
    instructions.innerHTML = "Well done, you are a 🌟 for learning your letters! ";
    document.body.appendChild(instructions);
}

