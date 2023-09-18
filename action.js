const buttonElement = document.getElementById("generate_button")
const quoteEl = document.getElementById("quote");
const authEl = document.getElementById("author");

const apiURL="https://api.quotable.io/random"

async function getQuote(){
    try {
        buttonElement.innerText = "Loading ....";
        buttonElement.disabled = true;
        quoteEl.innerText = "Updating ...";
        authEl.innerText = "Updating ...";

        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authEl.innerText = "~ "+quoteAuthor;

        buttonElement.innerText = "Get a Quote";
        buttonElement.disabled = false;
    } catch (error) {
        console.log("error");
        quoteEl.innerText = "Error Occured. Try again later";
        authEl.innerText = "Error Occured";
        buttonElement.innerText="Get q Quote";
        buttonElement.disabled = false;
    }
}

buttonElement.addEventListener("click", getQuote);