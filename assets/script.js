var APIKey = "039a6b45ccd3001c8a73a24f6fa09a96";

// example for lat and lon
var city = "London";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
    });

// search function 
// 1. learn how to create search function
// 2. create search history that saves a list underneath search bar
// 2a create history through li for each city under ul(id=search-history)
// 2aa create a way to cap search history to 10 
// 2ab add addEventListener to the li elements 

var searchSection = document.querySelector("#search");
var searchHistory = document.querySelector(".search-history");
var searchbtn = document.querySelector("#searchbtn");
var searchResult = document.querySelector("#search-form");
var historyArray = [];


// provides value of search and saves the history in the search history section 
function search() {
    console.log(searchResult.value);
    searchHistory.children[0].remove();
    localStorage.setItem('searchhistory', searchResult.value);
    var history = localStorage.getItem('searchhistory');
    historyArray.push(history);
    console.log(historyArray);

    if (historyArray.length === 4){
        historyArray.shift();
    };
    console.log(historyArray);
    for (var x in historyArray) {
        var historyresults = document.createElement('li');
        historyresults.setAttribute("id", "search-history");
        historyresults.textContent = historyArray[x];
        searchHistory.append(historyresults);
    };
};

// Gets the searchbtn to work with input
searchbtn.addEventListener("click", search);


// value from search function will fetch city temperature

// displays current weather conditions (city name, date, weather icon,
// temperature, humidity, // wind speed)
// 1. find which data equals each necessary requirement

// displays cards with 5 day forecast of selected city 
// find what is the 5 day forecast in the fetch
// // create cards with li for each weather condition through javascript (id=card
// for ul) all in div(id= cards-container)