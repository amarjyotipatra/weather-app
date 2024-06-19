const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

document.getElementById('city-input-btn').addEventListener('click', () => {
    const cityName = document.getElementById('city-input').value;
    weatherFn(cityName);
});

async function weatherFn(cName) {
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    const cityName = document.getElementById('city-name');
    const date = document.getElementById('date');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const windSpeed = document.getElementById('wind-speed');

    cityName.textContent = data.name;
    date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weather-info').style.display = 'block';
}
