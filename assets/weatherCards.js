function weatherCards() {
    var secondQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
        fetch(secondQueryURL)
        .then(function (response) {
            if (response.status === 404) {
                return;
            } else {
            return response.json();
            };
        })
        .then(function (data) {
            if (data === undefined) {
                return;
            } else {
                // reveals cards for 5 day forecast
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
            };
        });
}