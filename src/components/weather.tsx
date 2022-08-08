import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import fetchWeather from "../services/weather.services";
import { Period } from "../types";

export default function WeatherForecast () {
    const [forecasts, setForecasts] = useState<Period[]>([]);

    useEffect(() => {
        // getAllWeather()
        fetchWeather().then((response) => setForecasts(response.periods))
        // console.log(forecasts)
      }, [])

    // function getAllWeather() {
    //     fetchWeather().then((response) => {setForecasts(response.periods); // why is this not setting the state?
    //     console.log(response.periods)});//this shows the array
    // }
        
          return (
              <div>
                  {forecasts.map(forecast => (
                    <li key={nanoid()}>
                    <h1>{forecast.name}</h1>
                    <p>{forecast.temperature}</p>
                    <img src={`${forecast.icon}`} alt='weather'/>
                    <p>{forecast.detailedForecast}</p>
                    </li>
                ))}
              </div>
)}