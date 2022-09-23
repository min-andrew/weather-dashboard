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

var cardsContainer = document.querySelector("#cards-container");


// provides value of search and saves the history in the search history section 
function search() {
    console.log(searchResult.value);
    localStorage.setItem('searchhistory', searchResult.value);
    var history = localStorage.getItem('searchhistory');
    historyArray.push(history);

    // creates the search history tabs
    var historyresults = document.createElement('button');
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

    var secondQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(secondQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Creates cards for 5 day forecast 
            var forecastCards1 = document.createElement('ul');
            forecastCards1.setAttribute("id", "card");
            var forecastCards2 = document.createElement('ul');
            forecastCards2.setAttribute("id", "card");
            var forecastCards3 = document.createElement('ul');
            forecastCards3.setAttribute("id", "card");
            var forecastCards4 = document.createElement('ul');
            forecastCards4.setAttribute("id", "card");
            var forecastCards5 = document.createElement('ul');
            forecastCards5.setAttribute("id", "card");
            cardsContainer.append(forecastCards1);
            cardsContainer.append(forecastCards2);
            cardsContainer.append(forecastCards3);
            cardsContainer.append(forecastCards4);
            cardsContainer.append(forecastCards5);

            // Card 1 
            var forecastCard1Icon = document.createElement('img');
            forecastCard1Icon.src = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
            var forecastCard1Date = document.createElement('li');
            forecastCard1Date.textContent = moment(data.list[0].dt_txt).format('MM/DD/YYYY');
            var forecastCard1Temp = document.createElement('li');
            forecastCard1Temp.textContent = "Temp: " + data.list[0].main.temp + " °F";
            var forecastCard1Wind = document.createElement('li');
            forecastCard1Wind.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
            var forecastCard1Humidity = document.createElement('li');
            forecastCard1Humidity.textContent = "Humidity: " + data.list[0].main.humidity + " %";
            forecastCards1.append(forecastCard1Icon);
            forecastCards1.append(forecastCard1Date);
            forecastCards1.append(forecastCard1Temp);
            forecastCards1.append(forecastCard1Wind);
            forecastCards1.append(forecastCard1Humidity);

            // card 2 
            var forecastCard2Icon = document.createElement('img');
            forecastCard2Icon.src = "http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png";
            var forecastCard2Date = document.createElement('li');
            forecastCard2Date.textContent = moment(data.list[8].dt_txt).format('MM/DD/YYYY');
            var forecastCard2Temp = document.createElement('li');
            forecastCard2Temp.textContent = "Temp: " + data.list[8].main.temp + " °F";
            var forecastCard2Wind = document.createElement('li');
            forecastCard2Wind.textContent = "Wind: " + data.list[8].wind.speed + " MPH";
            var forecastCard2Humidity = document.createElement('li');
            forecastCard2Humidity.textContent = "Humidity: " + data.list[8].main.humidity + " %";
            forecastCards2.append(forecastCard2Icon);
            forecastCards2.append(forecastCard2Date);
            forecastCards2.append(forecastCard2Temp);
            forecastCards2.append(forecastCard2Wind);
            forecastCards2.append(forecastCard2Humidity);

            // card 3 
            var forecastCard3Icon = document.createElement('img');
            forecastCard3Icon.src = "http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png";
            var forecastCard3Date = document.createElement('li');
            forecastCard3Date.textContent = moment(data.list[16].dt_txt).format('MM/DD/YYYY');
            var forecastCard3Temp = document.createElement('li');
            forecastCard3Temp.textContent = "Temp: " + data.list[16].main.temp + " °F";
            var forecastCard3Wind = document.createElement('li');
            forecastCard3Wind.textContent = "Wind: " + data.list[16].wind.speed + " MPH";
            var forecastCard3Humidity = document.createElement('li');
            forecastCard3Humidity.textContent = "Humidity: " + data.list[16].main.humidity + " %";
            forecastCards3.append(forecastCard3Icon);
            forecastCards3.append(forecastCard3Date);
            forecastCards3.append(forecastCard3Temp);
            forecastCards3.append(forecastCard3Wind);
            forecastCards3.append(forecastCard3Humidity);
            data.list[16]

            // card 4 
            var forecastCard4Icon = document.createElement('img');
            forecastCard4Icon.src = "http://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png";
            var forecastCard4Date = document.createElement('li');
            forecastCard4Date.textContent = moment(data.list[24].dt_txt).format('MM/DD/YYYY');
            var forecastCard4Temp = document.createElement('li');
            forecastCard4Temp.textContent = "Temp: " + data.list[24].main.temp + " °F";
            var forecastCard4Wind = document.createElement('li');
            forecastCard4Wind.textContent = "Wind: " + data.list[24].wind.speed + " MPH";
            var forecastCard4Humidity = document.createElement('li');
            forecastCard4Humidity.textContent = "Humidity: " + data.list[24].main.humidity + " %";
            forecastCards4.append(forecastCard4Icon);
            forecastCards4.append(forecastCard4Date);
            forecastCards4.append(forecastCard4Temp);
            forecastCards4.append(forecastCard4Wind);
            forecastCards4.append(forecastCard4Humidity);
            data.list[24]

            // card 5 
            var forecastCard5Icon = document.createElement('img');
            forecastCard5Icon.src = "http://openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png";
            var forecastCard5Date = document.createElement('li');
            forecastCard5Date.textContent = moment(data.list[32].dt_txt).format('MM/DD/YYYY');
            var forecastCard5Temp = document.createElement('li');
            forecastCard5Temp.textContent = "Temp: " + data.list[32].main.temp + " °F";
            var forecastCard5Wind = document.createElement('li');
            forecastCard5Wind.textContent = "Wind: " + data.list[32].wind.speed + " MPH";
            var forecastCard5Humidity = document.createElement('li');
            forecastCard5Humidity.textContent = "Humidity: " + data.list[32].main.humidity + " %";
            forecastCards5.append(forecastCard5Icon);
            forecastCards5.append(forecastCard5Date);
            forecastCards5.append(forecastCard5Temp);
            forecastCards5.append(forecastCard5Wind);
            forecastCards5.append(forecastCard5Humidity);
            data.list[32]

        });

    function research() {
        var x = this.innerHTML;
        console.log(x);
    };
};

// Gets the searchbtn to work with input
searchbtn.addEventListener("click", search);