//first of get your elements
const getWeather = document.querySelector(".getWeather");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
//then your api keys
const apiKey = "904be58f162482de250fdb86bf0b2cf3";

//then create an arrow function with an event listener for the submit button to work
getWeather.addEventListener("submit", event =>{
    //form usually refresh a webpage when clicked on so let's stop that
    event.preventDefault();

    //next we would use the cityInput that we declared before, access the value and store it in a new variable and turn it into a string
    const city = cityInput.value;

    //if there is a city do this or else displayError we used the display erro function so any code there would be displayed here
    if(city){

    }else{
        displayError("Please Enetr a city");
    }

})

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

//this function is for error messages
function displayError(messgae){
    //we create an element p to display the error
    const errorDisplay = document.createElement("p");
    //then we access the textcontent to the message
    errorDisplay.textContent = messgae;
    //then we add a css classbecause we already have stylings for it
    errorDisplay.classList.add("errorDisplay")

    //next we'd take our card and to be an empty sytring
    card.textContent = "";
    card.style.display = "flex";
}