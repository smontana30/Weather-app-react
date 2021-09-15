import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function WeatherCards({weatherInfo}) {
    const time = new Date(weatherInfo.dt * 1000);
    // const testDate = new Date(weatherInfo.list[0].dt * 1000);
    const weatherIcon = (weather) => {
        return `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    }

    const kelvinToFarenheit = (k) => {
        return Math.floor((((k - 273.15) * 9) / 5))
    }

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {weatherInfo.weather.map((day) => (
                    <Card key={day.id} className={day.main.toLowerCase()}>
                        <img src={weatherIcon(day)} alt='oh no'/>
                        <CardContent>
                            <Typography>
                                {time.toUTCString()}
                            </Typography>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography style={{margin: '1vh'}}>
                                    {kelvinToFarenheit(weatherInfo.main.temp_max)}
                                </Typography>
                                <Typography style={{margin: '1vh'}}>
                                    {kelvinToFarenheit(weatherInfo.main.temp_min)}
                                </Typography>
                            </div>
                            <Typography>
                                {day.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default WeatherCards;