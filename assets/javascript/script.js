// Global Variables
var cityBox = document.querySelector('#city-info');
var cityForecast = document.querySelector('#city-forecast');
var cityName = document.querySelector('#city-name');
var citySearch = document.querySelector('#city-search');
var lat = document.querySelector('#lat');
var lon = document.querySelector('#lon');
var apiKey = '8e2f43d909354c0af3b25ae5408f8e8c';


// Get lat and lon
function loadOutput() {
    var geoKey = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&appid=${apiKey}`;
    console.log(geoKey)
    fetch(geoKey)
    .then(function (response) {
        return response.json()
    })
    .then(function (variable) {
        var lat = variable[0].lat;
        var lon = variable[0].lon;
        for (var i = 0; i < variable.length; i++);
        console.log(lat);
        console.log(lon);
        
        var displayLat = document.createElement('input');
        var displayLon = document.createElement('input');
        var searchButton = document.createElement('button')

        displayLat.value = lat;
        displayLat.id = 'latitude';
        displayLon.value = lon;
        displayLon.id = 'longitude';
        searchButton.className = 'latLonSearch';
        searchButton.innerHTML = 'Search';
        searchButton.onclick = cityEl;
        
        citySearch.appendChild(displayLat);
        citySearch.appendChild(displayLon);
        citySearch.appendChild(searchButton);
    })
};

// Code to search for a city
function cityEl() {
    var latEl = document.getElementById('latitude');
    var lonEl = document.getElementById('longitude');
    console.log(latEl.value);
    console.log(lonEl.value);
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latEl.value}&lon=${lonEl.value}&appid=${apiKey}&units=imperial`;
    console.log(apiUrl);
    fetch(apiUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        for (i = 0; i <= data.length; i+1);

        // Current Temp Variables
        // var date = 
        var temp = data.current.temp;
        var wind = data.current.wind_speed;
        var humidity = data.current.humidity;
        var uvIndex = data.current.uvi;

        // 5 Day Variables
        var fiveTemp = data.daily[i].temp.max;
        var fiveWind = data.daily[i].wind_speed;
        var fiveHumidity = data.daily[i].humidity;
        var fiveUvIndex = data.daily[i].uvi;

        // Create Current Elements
        var displayName = document.createElement('h2');
        var displayTime = document.createElement('h3')
        var displayTemp = document.createElement('p');
        var displayWind = document.createElement('p');
        var displayHumidity = document.createElement('p');
        var displayUv = document.createElement('p');

        

        // Set Attributes for Same Day
        displayName.textContent = cityName.value;
        displayTime.textContent = 
        displayTemp.textContent = 'Temperature: ' + temp + ' °F';
        displayWind.textContent = 'Wind Speed: ' + wind + ' MPH';
        displayHumidity.textContent = 'Humidity: ' + humidity + ' %';
        displayUv.textContent = 'UV Index: ' + uvIndex;

        

        // Create Current Elements
        cityBox.appendChild(displayName);
        cityBox.appendChild(displayTemp);
        cityBox.appendChild(displayWind);
        cityBox.appendChild(displayHumidity);
        cityBox.appendChild(displayUv);

        

        if (i <= 5) {
        // Create 5-day Elements
        // var dateDisplayFive = document.createElement('h3')
        var displayTempFive = document.createElement('p');
        var displayWindFive = document.createElement('p');
        var displayHumidityFive = document.createElement('p');
        var displayUvFive = document.createElement('p');

        // Set Attributes for 5 Day
        // dateDisplayFive.textContent = ;
        displayTempFive.textContent = 'Temperature: ' + fiveTemp + ' °F';
        displayWindFive.textContent = 'Wind Speed: ' + fiveWind + ' MPH';
        displayHumidityFive.textContent = 'Humidity: ' + fiveHumidity + ' %';
        displayUvFive.textContent = 'UV Index: ' + fiveUvIndex;

        // Create 5-day elements
        cityForecast.appendChild(displayTempFive);
        cityForecast.appendChild(displayWindFive);
        cityForecast.appendChild(displayHumidityFive);
        cityForecast.appendChild(displayUvFive);

        // Add to i
        i + 1;
        } 
    })
};

// Code for UV

// Code to save data


