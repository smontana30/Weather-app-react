import React, {} from 'react'

function SideBar({weather, index}) {
    const sunSet = new Date(weather.sys.sunset * 1000);
    const sunRise = new Date(weather.sys.sunrise * 1000);

    const kelvinToFarenheit = (k) => {
        return Math.floor((((k - 273.15) * 9) / 5))
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0vh'}}>
            <h4 style={{fontSize: '14vh', fontWeight: 'normal'}}>{kelvinToFarenheit(weather.main.temp)}&deg;F</h4>
            <ul style={{listStyleType: 'none', fontSize: '2.5vh'}}>
                <li>Feels Like: {kelvinToFarenheit(weather.main.feels_like)}&deg;F</li>
                <li>Humidity: {weather.main.humidity}%</li>
                <li>Pressure: {weather.main.pressure}</li>
                <li>Max temp: {kelvinToFarenheit(weather.main.temp_max)}&deg;F</li>
                <li>min temp: {kelvinToFarenheit(weather.main.temp_min)}&deg;F</li>
                <li>Wind: {weather.wind.speed}</li>
                <li>Sunrise: {sunRise.toUTCString()}</li>
                <li>Sunset: {sunSet.toUTCString()}</li>
            </ul>
        </div>
    );
}

export default SideBar;