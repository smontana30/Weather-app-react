import React, {} from 'react'

function SideBar({weather, index}) {
    const sunSet = new Date(weather.sys.sunset * 1000);
    const sunRise = new Date(weather.sys.sunrise * 1000);

    const kelvinToFarenheit = (k) => {
        return Math.floor((((k - 273.15) * 9) / 5)+ 32)
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>{weather.name}</h1>
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', margin: '0vh'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: '1vh'}}>
                    <h1 style={{fontWeight: 'normal', fontSize: '15vh'}}>{kelvinToFarenheit(weather.main.temp)}&deg;</h1>
                </div>
                <ul style={{listStyleType: 'none', fontSize: '2.5vh', marginLeft: '2vh', display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <li>Feels Like: {kelvinToFarenheit(weather.main.feels_like)}&deg;</li>
                    <li>Humidity: {weather.main.humidity}%</li>
                    <li>Pressure: {weather.main.pressure}</li>
                    <li>Max temp: {kelvinToFarenheit(weather.main.temp_max)}&deg;</li>
                    <li>Min temp: {kelvinToFarenheit(weather.main.temp_min)}&deg;</li>
                </ul>
            </div>
        </div>
        
    );
}

export default SideBar;