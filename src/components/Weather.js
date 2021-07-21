import { useState, useEffect } from 'react';
import {getCurrentWheater} from '../services/WheaterData';

const Weather = ({ cityName }) => {
    const [weaterData, setWeatherData] = useState({ temperature: 0, weather_icons: "", wind_speed: 0, wind_dir: "" });

    useEffect(() => {
        // sredi ovo sa process.env
        getCurrentWheater(cityName)
            .then(res => {
                console.log(res)
                setWeatherData({
                    ...weaterData,
                    temperature: res.temperature,
                    weather_icons: res.weather_icons,
                    wind_dir: res.wind_dir,
                    wind_speed: res.wind_speed
                })
            })
        });

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

