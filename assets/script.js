var APIKey = "039a6b45ccd3001c8a73a24f6fa09a96";

// example for lat and lon
var city = "";

// search function 
// 1. learn how to create search function +
// 2. create search history that saves a list underneath search bar +
// 2a create history through li (id=historyresult) for each city under ul(id=search-history) +
// 2aa create a way to cap search history to 10 +
// 2ab add addEventListener to the li elements 
// 3. only cities provide values. Make it so that search of an invalid thing provides no information/ gives an error 
// 2aba might need to change li into a input and the ul into form elements 

var searchSection = document.querySelector("#search");
var searchHistory = document.querySelector(".search-history");
var searchbtn = document.querySelector("#searchbtn");
var searchResult = document.querySelector("#search-form");
var historyArray = [];

var currentName = document.querySelector("#current-city");
var currentTemp = document.querySelector("#temp");
var currentWind = document.querySelector("#wind");
var currentHumidity = document.querySelector("#humidity");
var icon = document.querySelector("#icon");


// provides value of search and saves the history in the search history section 
function search() {
    console.log(searchResult.value);
    localStorage.setItem('searchhistory', searchResult.value);
    var history = localStorage.getItem('searchhistory');
    historyArray.push(history);

    // creates the search history tabs
    var historyresults = document.createElement('li');
    historyresults.setAttribute("id", "historyResult " + searchResult.value);
    historyresults.textContent = history;
    searchHistory.append(historyresults);

    if (historyArray.length === 10) {
        historyArray.shift();
        if (searchHistory.firstElementChild.innerHTML = history) {
            searchHistory.firstElementChild.remove();
        }
    };

    // value from search function will fetch city temperature
    city = searchResult.value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            // displays current weather conditions (city name, date, weather icon, temperature, humidity, // wind speed)
            // 1. find which data equals each necessary requirement +
            var currentCityName = data.name;
            var currentCityTemp = data.main.temp;
            var currentCityIcon = data.weather[0].icon;
            var currentCityHumidity = data.main.humidity;
            var currentCityWind = data.wind.speed;
            var currentDate = Date(Date.UTC(data.dt));
            var iconurl = "http://openweathermap.org/img/w/" + currentCityIcon + ".png";
            icon.setAttribute("src", iconurl);
            icon.style.display = "block";

            currentName.textContent = currentCityName + " " + "(" + currentDate + ")";
            currentTemp.textContent = "Temp: " + currentCityTemp + " °F";
            currentWind.textContent = "Wind: " + currentCityWind + " MPH";
            currentHumidity.textContent = "Humidity: " + currentCityHumidity + " %";
        });

    var secondQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(secondQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

    function research() {
        var x = this.innerHTML;
        console.log(x);
    };
};


// Gets the searchbtn to work with input
searchbtn.addEventListener("click", search);


// displays cards with 5 day forecast of selected city 
// find what is the 5 day forecast in the fetch
// create cards with li for each weather condition through javascript (id=card
// for ul) all in div(id= cards-container)
