const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const cityInput = document.querySelector('.city')



async function getWeather () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const responce = await fetch(url)
    const data = await responce.json()

    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`
    weatherDescription.textContent = data.weather[0].description
    document.querySelector('.wind').textContent = `Wind speed: ${data.wind.speed} m/s`
    document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`
}

getWeather()

cityInput.addEventListener('change', getWeather)

function setWeatherLS () {
    localStorage.setItem ('weather', cityInput.value)

}

window.addEventListener('beforeunload', setWeatherLS)

function getWeatherLS () {
    const loadWeather = localStorage.getItem('weather')
    if (loadWeather !== null) {
        cityInput.value = loadWeather
        getWeather()
    }
}

window.addEventListener('load', getWeatherLS)
