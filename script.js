  // Function to open the alert overlay
function openAlert() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}

// Function to close the alert overlay and reload the page
function closeAlert() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    location.reload();
}

// Function to fetch weather data using the OpenWeatherMap API
function fetchWeather() {
    var apiKey = 'a1cbe27a90d169fa3952e3f02732a49a';
    var city = document.getElementById("cityInput").value;
    const image = document.getElementById("weather_Image");
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }

            return response.json();
        })
        .then(data => {
            // Update weather information in the DOM
            document.getElementById("cityName").textContent = data.name;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.getElementById("temperature").textContent = data.main.temp + "°C";
            document.getElementById("weatherDescription").textContent = data.weather[0].description;
            if(data.weather[0].description == 'clear sky'){
                image.src = "clear.gif";
            }
            else if(data.weather[0].description == 'scattered clouds'){
                image.src = "clouds.gif"
            }
            else if(data.weather[0].description == 'broken clouds'){
                image.src = "clouds.gif"
            }
            else if(data.weather[0].description == 'light rain'){
                image.src = "cat.gif"
            }
            else if(data.weather[0].description == 'overcast clouds'){
                image.src = "clouds.gif"
            }
            else if(data.weather[0].description == 'fog'){
                image.src = "fog.gif"
            }
            document.getElementById("humidity").textContent = data.main.humidity + "%";
            document.getElementById("wind").textContent = data.wind.speed + " m/s";
            //overcast clouds
            // Display the weather card with a slide-down effect
            document.getElementById("weatherCard").style.display = 'block';
        })
        .catch(error => {
            openAlert();
        });
}



// Add event listener to the search button
document.getElementById("searchButton").addEventListener("click", fetchWeather);


           
