// Global Variables
var weather = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=8e2f43d909354c0af3b25ae5408f8e8c";
var fiveDay = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid=8e2f43d909354c0af3b25ae5408f8e8c";
// Code to search for a city
function cityName() {
    var cityInput = document.querySelector('#city-search');
    var cityTitle = document.querySelector('#city-name');
    cityTitle.innerHTML = cityInput.value;
};

// Code to display info


// Code to display 5 Day Forecast and generate boxes
function fiveCast () {

}
