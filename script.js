var apiKey = '7d0a80c79b2c07c64425ed6bfac77bb6';

function weatherForecast(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}" + city + '&appid=' + apiKey + '&cnt=5')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log('--->' + (JSON.stringify(data)));
            drawWeather(data);
        })
        .catch(function () {

        });
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    var description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name + ' ' + d.sys.country;
}

document.addEventListener("DOMContentLoaded", () => {
    // Handling button click
    document.querySelector(".button-search").addEventListener("click", () => {
        const searchedCity = document.querySelector('.text-search');
        console.log(searchedCity.value);
        if (searchedCity.value) {
            weatherForecast(searchedCity.value);
        }
    })
});