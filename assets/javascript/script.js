// Global Variables

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
        namedCity = data.name;
        
    })
 };


// Code to display info


// Code to display 5 Day Forecast and generate boxes

