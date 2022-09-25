var APIKey = "039a6b45ccd3001c8a73a24f6fa09a96";

// example for lat and lon
var city = "";

// search function 
// 1. learn how to create search function +
// 2. create search history that saves a list underneath search bar +
// 2a create history through li (id=historyresult) for each city under ul(id=search-history) +
// 2aa create a way to cap search history to 10 +
// 2ab add addEventListener to the li elements -
// 3. only cities provide values. Make it so that search of an invalid thing provides no information/ gives an error 
// 2aba might need to change li into a input and the ul into form elements +

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

var cardsContainer = document.querySelector("#cards-container");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var card4 = document.querySelector(".card4");
var card5 = document.querySelector(".card5");


// provides value of search and saves the history in the search history section 
function search() {
    console.log(searchResult.value);
    var comparison = historyArray.includes(searchResult.value)
    if (comparison === false) {

        localStorage.setItem('searchhistory', searchResult.value);
        var history = localStorage.getItem('searchhistory');
        historyArray.push(history);

        // creates the search history tabs
        var historyresults = document.createElement('button');
        historyresults.setAttribute("id", "historyResult " + searchResult.value);
        historyresults.textContent = history;
        searchHistory.append(historyresults);
        historyresults.addEventListener("click", research);

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
                var easyDate = moment(currentDate).format('MM/DD/YYYY')
                var iconurl = "http://openweathermap.org/img/w/" + currentCityIcon + ".png";
                icon.setAttribute("src", iconurl);
                icon.style.display = "block";

                currentName.textContent = currentCityName + " " + "(" + easyDate + ")";
                currentTemp.textContent = "Temp: " + currentCityTemp + " °F";
                currentWind.textContent = "Wind: " + currentCityWind + " MPH";
                currentHumidity.textContent = "Humidity: " + currentCityHumidity + " %";

            });

        // displays cards with 5 day forecast of selected city +
        // find what is the 5 day forecast in the fetch +
        // create cards with li for each weather condition through javascript (id=card for ul) all in div(id= cards-container) +

        // BUG: 5 cards are produced every time a search results occurs. FIX: add the cards and their contents so they are just replaced instead of appended +

        var secondQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
        fetch(secondQueryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                // Creates cards for 5 day forecast
                card1.style.display = "flex";
                card2.style.display = "flex";
                card3.style.display = "flex";
                card4.style.display = "flex";
                card5.style.display = "flex";


                // Card 1 
                var forecastCard1Icon = document.querySelector("#forecast-icon-1");
                forecastCard1Icon.src = "http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png";
                var forecastCard1Date = document.querySelector("#forecast-date-1")
                forecastCard1Date.textContent = moment(data.list[5].dt_txt).format('MM/DD/YYYY');
                var forecastCard1Temp = document.querySelector("#forecast-temp-1")
                forecastCard1Temp.textContent = "Temp: " + data.list[5].main.temp + " °F";
                var forecastCard1Wind = document.querySelector("#forecast-wind-1")
                forecastCard1Wind.textContent = "Wind: " + data.list[5].wind.speed + " MPH";
                var forecastCard1Humidity = document.querySelector("#forecast-humidity-1")
                forecastCard1Humidity.textContent = "Humidity: " + data.list[5].main.humidity + " %";

                // card 2 
                var forecastCard2Icon = document.querySelector("#forecast-icon-2");
                forecastCard2Icon.src = "http://openweathermap.org/img/w/" + data.list[13].weather[0].icon + ".png";
                var forecastCard2Date = document.querySelector("#forecast-date-2")
                forecastCard2Date.textContent = moment(data.list[13].dt_txt).format('MM/DD/YYYY');
                var forecastCard2Temp = document.querySelector("#forecast-temp-2")
                forecastCard2Temp.textContent = "Temp: " + data.list[13].main.temp + " °F";
                var forecastCard2Wind = document.querySelector("#forecast-wind-2")
                forecastCard2Wind.textContent = "Wind: " + data.list[13].wind.speed + " MPH";
                var forecastCard2Humidity = document.querySelector("#forecast-humidity-2")
                forecastCard2Humidity.textContent = "Humidity: " + data.list[13].main.humidity + " %";

                // card 3 
                var forecastCard3Icon = document.querySelector("#forecast-icon-3");
                forecastCard3Icon.src = "http://openweathermap.org/img/w/" + data.list[21].weather[0].icon + ".png";
                var forecastCard3Date = document.querySelector("#forecast-date-3")
                forecastCard3Date.textContent = moment(data.list[21].dt_txt).format('MM/DD/YYYY');
                var forecastCard3Temp = document.querySelector("#forecast-temp-3");
                forecastCard3Temp.textContent = "Temp: " + data.list[21].main.temp + " °F";
                var forecastCard3Wind = document.querySelector("#forecast-wind-3");
                forecastCard3Wind.textContent = "Wind: " + data.list[21].wind.speed + " MPH";
                var forecastCard3Humidity = document.querySelector("#forecast-humidity-3");
                forecastCard3Humidity.textContent = "Humidity: " + data.list[21].main.humidity + " %";

                // card 4 
                var forecastCard4Icon = document.querySelector("#forecast-icon-4");
                forecastCard4Icon.src = "http://openweathermap.org/img/w/" + data.list[29].weather[0].icon + ".png";
                var forecastCard4Date = document.querySelector("#forecast-date-4")
                forecastCard4Date.textContent = moment(data.list[29].dt_txt).format('MM/DD/YYYY');
                var forecastCard4Temp = document.querySelector("#forecast-temp-4")
                forecastCard4Temp.textContent = "Temp: " + data.list[29].main.temp + " °F";
                var forecastCard4Wind = document.querySelector("#forecast-wind-4")
                forecastCard4Wind.textContent = "Wind: " + data.list[29].wind.speed + " MPH";
                var forecastCard4Humidity = document.querySelector("#forecast-humidity-4")
                forecastCard4Humidity.textContent = "Humidity: " + data.list[29].main.humidity + " %";

                // card 5 
                var forecastCard5Icon = document.querySelector("#forecast-icon-5");
                forecastCard5Icon.src = "http://openweathermap.org/img/w/" + data.list[37].weather[0].icon + ".png";
                var forecastCard5Date = document.querySelector("#forecast-date-5")
                forecastCard5Date.textContent = moment(data.list[37].dt_txt).format('MM/DD/YYYY');
                var forecastCard5Temp = document.querySelector("#forecast-temp-5")
                forecastCard5Temp.textContent = "Temp: " + data.list[37].main.temp + " °F";
                var forecastCard5Wind = document.querySelector("#forecast-wind-5")
                forecastCard5Wind.textContent = "Wind: " + data.list[37].wind.speed + " MPH";
                var forecastCard5Humidity = document.querySelector("#forecast-humidity-5")
                forecastCard5Humidity.textContent = "Humidity: " + data.list[37].main.humidity + " %";

            });
    };
};

function research() {
    var x = this.innerHTML;
    console.log(x);
    city = x;
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
            var easyDate = moment(currentDate).format('MM/DD/YYYY')
            var iconurl = "http://openweathermap.org/img/w/" + currentCityIcon + ".png";
            icon.setAttribute("src", iconurl);
            icon.style.display = "block";

            currentName.textContent = currentCityName + " " + "(" + easyDate + ")";
            currentTemp.textContent = "Temp: " + currentCityTemp + " °F";
            currentWind.textContent = "Wind: " + currentCityWind + " MPH";
            currentHumidity.textContent = "Humidity: " + currentCityHumidity + " %";

        });

    // displays cards with 5 day forecast of selected city +
    // find what is the 5 day forecast in the fetch +
    // create cards with li for each weather condition through javascript (id=card for ul) all in div(id= cards-container) +

    // BUG: 5 cards are produced every time a search results occurs. FIX: add the cards and their contents so they are just replaced instead of appended +

    var secondQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(secondQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Creates cards for 5 day forecast
            card1.style.display = "flex";
            card2.style.display = "flex";
            card3.style.display = "flex";
            card4.style.display = "flex";
            card5.style.display = "flex";


            // Card 1 
            var forecastCard1Icon = document.querySelector("#forecast-icon-1");
            forecastCard1Icon.src = "http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png";
            var forecastCard1Date = document.querySelector("#forecast-date-1")
            forecastCard1Date.textContent = moment(data.list[5].dt_txt).format('MM/DD/YYYY');
            var forecastCard1Temp = document.querySelector("#forecast-temp-1")
            forecastCard1Temp.textContent = "Temp: " + data.list[5].main.temp + " °F";
            var forecastCard1Wind = document.querySelector("#forecast-wind-1")
            forecastCard1Wind.textContent = "Wind: " + data.list[5].wind.speed + " MPH";
            var forecastCard1Humidity = document.querySelector("#forecast-humidity-1")
            forecastCard1Humidity.textContent = "Humidity: " + data.list[5].main.humidity + " %";

            // card 2 
            var forecastCard2Icon = document.querySelector("#forecast-icon-2");
            forecastCard2Icon.src = "http://openweathermap.org/img/w/" + data.list[13].weather[0].icon + ".png";
            var forecastCard2Date = document.querySelector("#forecast-date-2")
            forecastCard2Date.textContent = moment(data.list[13].dt_txt).format('MM/DD/YYYY');
            var forecastCard2Temp = document.querySelector("#forecast-temp-2")
            forecastCard2Temp.textContent = "Temp: " + data.list[13].main.temp + " °F";
            var forecastCard2Wind = document.querySelector("#forecast-wind-2")
            forecastCard2Wind.textContent = "Wind: " + data.list[13].wind.speed + " MPH";
            var forecastCard2Humidity = document.querySelector("#forecast-humidity-2")
            forecastCard2Humidity.textContent = "Humidity: " + data.list[13].main.humidity + " %";

            // card 3 
            var forecastCard3Icon = document.querySelector("#forecast-icon-3");
            forecastCard3Icon.src = "http://openweathermap.org/img/w/" + data.list[21].weather[0].icon + ".png";
            var forecastCard3Date = document.querySelector("#forecast-date-3")
            forecastCard3Date.textContent = moment(data.list[21].dt_txt).format('MM/DD/YYYY');
            var forecastCard3Temp = document.querySelector("#forecast-temp-3");
            forecastCard3Temp.textContent = "Temp: " + data.list[21].main.temp + " °F";
            var forecastCard3Wind = document.querySelector("#forecast-wind-3");
            forecastCard3Wind.textContent = "Wind: " + data.list[21].wind.speed + " MPH";
            var forecastCard3Humidity = document.querySelector("#forecast-humidity-3");
            forecastCard3Humidity.textContent = "Humidity: " + data.list[21].main.humidity + " %";

            // card 4 
            var forecastCard4Icon = document.querySelector("#forecast-icon-4");
            forecastCard4Icon.src = "http://openweathermap.org/img/w/" + data.list[29].weather[0].icon + ".png";
            var forecastCard4Date = document.querySelector("#forecast-date-4")
            forecastCard4Date.textContent = moment(data.list[29].dt_txt).format('MM/DD/YYYY');
            var forecastCard4Temp = document.querySelector("#forecast-temp-4")
            forecastCard4Temp.textContent = "Temp: " + data.list[29].main.temp + " °F";
            var forecastCard4Wind = document.querySelector("#forecast-wind-4")
            forecastCard4Wind.textContent = "Wind: " + data.list[29].wind.speed + " MPH";
            var forecastCard4Humidity = document.querySelector("#forecast-humidity-4")
            forecastCard4Humidity.textContent = "Humidity: " + data.list[29].main.humidity + " %";

            // card 5 
            var forecastCard5Icon = document.querySelector("#forecast-icon-5");
            forecastCard5Icon.src = "http://openweathermap.org/img/w/" + data.list[37].weather[0].icon + ".png";
            var forecastCard5Date = document.querySelector("#forecast-date-5")
            forecastCard5Date.textContent = moment(data.list[37].dt_txt).format('MM/DD/YYYY');
            var forecastCard5Temp = document.querySelector("#forecast-temp-5")
            forecastCard5Temp.textContent = "Temp: " + data.list[37].main.temp + " °F";
            var forecastCard5Wind = document.querySelector("#forecast-wind-5")
            forecastCard5Wind.textContent = "Wind: " + data.list[37].wind.speed + " MPH";
            var forecastCard5Humidity = document.querySelector("#forecast-humidity-5")
            forecastCard5Humidity.textContent = "Humidity: " + data.list[37].main.humidity + " %";
        });
};

// Gets the searchbtn to work with input
searchbtn.addEventListener("click", search);