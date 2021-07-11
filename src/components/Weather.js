import axios from 'axios';
import { useState, useEffect } from 'react';

const Weather = ({ cityName }) => {
    const [weaterData, setWeatherData] = useState({ temperature: 0, weather_icons: "",wind_speed : 0, wind_dir : ""});

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_SECRET_CODE}&query=${cityName}`)
            .then((res) => {
                setWeatherData({
                    ...weaterData, temperature: res.data.current.temperature,
                    weather_icons: res.data.current.weather_icons,
                    wind_speed: res.data.current.wind_speed,
                    wind_dir: res.data.current.wind_dir
                });
            })
    }, []);

    return (
        <div>
            <h2>Wheater in {cityName}</h2>
            <p><strong>temperature:</strong> {weaterData.temperature} celsius</p>
            <img src={weaterData.weather_icons} alt="weater" />
            <p><strong>Wind: </strong> {weaterData.wind_speed} mph, direction {weaterData.wind_dir}</p>
        </div>
    )
}

export default Weather;