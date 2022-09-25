function currentJumbo() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
            if (response.status === 404) {
                alert("This is not a city!");
                return;
            } else {
            return response.json();
            };
        })
        .then(function (data) {
            if (data === undefined) {
                return;
            } else {
                
                // displays current weather conditions (city name, date, weather icon, temperature, humidity, // wind speed)
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
            };
        });
};