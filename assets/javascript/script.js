// Global Variables

// Code to search for a city
function cityEl() {
    var apiKey = '8e2f43d909354c0af3b25ae5408f8e8c';
    var lat = document.getElementById('latitude').value;
    var lon = document.getElementById('longitude').value;
    var lang = 'en';
    var units = 'metric';
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`;
    fetch(apiUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        // console.log(data.name);
        // // var temperature = data
        // for (var i = 0; i <= data.length; ++i) {
        //     console.log('We in here');
        //    var cityName = document.createElement('h2') ;
        //    var weatherUl = document.createElement('ul');
           
        //    cityName.textContent = [i].name.value;
        //    cityInput.appendChild(cityName);
        })
    }
// };


// Code to display info


// Code to display 5 Day Forecast and generate boxes

