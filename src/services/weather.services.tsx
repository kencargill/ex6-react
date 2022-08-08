import axios from "axios";

export default function fetchWeather() {
    return axios
        .get('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
        .then(response => response.data.properties);
    }