const url = 'https://api.weatherapi.com/v1/current.json'; //{}
const api_key = 'ee6e11a49620424286c144134242912';

const cityInput = document.getElementById("city_type");
const getCityName = document.getElementById("getCity");
const CityName = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind_kmph");

const fetchWeather = (location) => {
    const weather_url = `${url}?key=${api_key}&q=${location}`;
    fetch(weather_url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((response) => {
            CityName.innerHTML = response.location.name;
            temp.innerHTML = response.current.temp_c + "°C";
            humidity.innerHTML = response.current.humidity + "%";
            wind_speed.innerHTML = response.current.wind_kph + " km/h";
            localStorage.setItem('Last City', location)
            
            CityName.style.color = "#007bff";
            CityName.style.fontSize = "2rem";
            CityName.style.padding = "50px";
        })
        .catch(err => {
            console.log(err);
            alert("Error fetching weather data.");
        });
};

getCityName.onclick = function(e){
    const location = cityInput.value.trim();
    if(location){
        fetchWeather(location);
    }
    else{
        alert("City Not Found");
    }
}

const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            //Query parameter based on which data is sent back. It could be following: Latitude and Longitude (Decimal degree) e.g: q=48.8567,2508
            const location = `${latitude},${longitude}`;
            fetchWeather(location);
        }, () => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
};

// window.onload =  function(){
//     const lastCity = localStorage.getItem('Last City');
//     if(lastCity){
//         fetchWeather(lastCity);
//     }
// }

window.onload = function() {
    getCurrentLocationWeather(); 
};

