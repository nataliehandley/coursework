const input = document.querySelectorAll(".input");
const welcome = document.querySelector(".welcome")
const btn = document.querySelector(".btn");

const getInputText = () => {
    welcome.innerHTML = input[0].value + " " +input[1].value;
}

btn.addEventListener('click', getInputText);