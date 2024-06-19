const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
    'f00c38e0279b7bc85480c3fe775d518c';
 
async function weatherFn(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
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