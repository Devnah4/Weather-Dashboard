// Global Variables
var cityBox = document.querySelector('#city-info');

// Code to search for a city
function cityEl() {
    var cityName = document.querySelector('#city-name');
    let apiKey = '8e2f43d909354c0af3b25ae5408f8e8c';
    let lang = 'en';
    let units = 'metric';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&lang=${lang}&units=${units}`;
    fetch(apiUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        var nameCity = data.name;
        var temp = data.main.temp;
        var wind = data.wind.speed;
        var humidity = data.main.humidity;
        
        for (var i = 0; i < data.length; i++);
        var displayName = document.createElement('h2');
        var displayTemp = document.createElement('p');
        var displayWind = document.createElement('p');
        var displayHumidity = document.createElement('p');
        // var displayUv = document.createElement('p');

        displayName.textContent = nameCity;
        displayTemp.textContent = 'Temperature: ' + temp;
        displayWind.textContent = 'Wind Speed: ' + wind;
        displayHumidity.textContent = 'Humidity: ' + humidity

        cityBox.appendChild(displayName);
        cityBox.appendChild(displayTemp);
        cityBox.appendChild(displayWind);
        cityBox.appendChild(displayHumidity);
        // cityBox.appendChild(displayUv);
        fiveDayForecast();
    })
 };


// Code for 5 Day Forecast
function fiveDayForecast() {
    
}


// Code to display 5 Day Forecast and generate boxes

