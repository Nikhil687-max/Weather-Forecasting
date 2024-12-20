document.addEventListener('DOMContentLoaded', () => {
    const s = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}";
    const API_KEY = 'b165940a504f1838d97a74a7511537ab';

    const cityInput = document.getElementById('inputCity');
    const getWeatherButton = document.getElementById('searchBtn');
    const weatherInfo = document.getElementById('output');
    const cityNameInput = document.getElementById('cityName');
    const temperatureDisplay = document.getElementById('Temperature');
    const discriptionDisplay = document.getElementById('Discription');
    let errorMessage = document.getElementById('ifError');
    errorMessage.style.color = "red";

    
    // errorMessage.classList.remove('hidden');

})