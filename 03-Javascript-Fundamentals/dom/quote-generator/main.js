const quoteText = document.getElementById("quote");
const quoteButton = document.querySelector("#quote-button");
const background = document.querySelector("main");

const quotes = [
    ["If you set your goals ridiculously high and its a failure, you will fail above everyone else's success. - James Cameron", "./images/mountains.jpg"],
["It is during our darkest moments that we see the light - Aristotle", "./images/moon.jpg"],
["I'll bring you flowers in the pouring rain", "./images/flowers.jpg"]
]

const getQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    quoteText.innerHTML = quotes[randomNumber][0];
    background.style.backgroundImage = `url(${quotes[randomNumber][1]})`
}

getQuote();

quoteButton.addEventListener('click', getQuote)