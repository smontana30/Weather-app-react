import React, {} from 'react'

function SideBar({weather, index}) {
    const sunSet = new Date(weather.sys.sunset * 1000);
    const sunRise = new Date(weather.sys.sunrise * 1000);

    const kelvinToFarenheit = (k) => {
        return Math.floor((((k - 273.15) * 9) / 5))
    }

    return (
        <div>
            <h4>Temp: {kelvinToFarenheit(weather.main.temp)}</h4>
            <ul>
                <li>Feels Like: {kelvinToFarenheit(weather.main.feels_like)}</li>
                <li>Humidity: {weather.main.humidity}</li>
                <li>Pressure: {weather.main.pressure}</li>
                <li>Max temp: {kelvinToFarenheit(weather.main.temp_max)}</li>
                <li>min temp: {kelvinToFarenheit(weather.main.temp_min)}</li>
                <li>Wind: {weather.wind.speed}</li>
                <li>Sunrise: {sunRise.toUTCString()}</li>
                <li>Sunset: {sunSet.toUTCString()}</li>
            </ul>
        </div>
    );
}

export default SideBar;