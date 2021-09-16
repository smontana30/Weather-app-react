import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function WeatherCards({weatherInfo}) {
    const [weatherCards, setWeatherCards] = useState([]);
    const time = new Date(weatherInfo.dt * 1000);

    useEffect(() => {
        const newCity = weatherInfo.name;
        let haveCity = false;
        weatherCards.forEach((card) => {
            if (card.weatherInfo.name == newCity) {
                haveCity = true;
                return;
            }
        });
        // checks for duplicates in our weather cards array
        // without everytime our app render we will get duplicates of the current city
        if (haveCity) {
            return;
        }
        let cards = [...weatherCards, {weatherInfo}]
        setWeatherCards(cards);
    }, [weatherInfo])

    const weatherIcon = (weather) => {
        return `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    }
    console.log(weatherInfo);
    const kelvinToFarenheit = (k) => {
        return Math.floor((((k - 273.15) * 9) / 5) + 32)
    }

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {weatherCards.map((weatherObj) => (
                    <Card key={weatherObj.weatherInfo.id} className='weather-card' raised style={{margin: '2vh', width: '30vh'}}>
                        <Typography variant='h4' style={{margin: '1vh'}}>
                                {weatherObj.weatherInfo.name}
                        </Typography>
                        <img style={{height: '20vh', width: '20vh'}} src={weatherIcon(weatherObj.weatherInfo.weather[0])} alt='oh no'/>
                        <CardContent>
                            <Typography variant='h4'>
                                {kelvinToFarenheit(weatherObj.weatherInfo.main.temp)}&deg;
                            </Typography>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant='h5' style={{margin: '1vh'}}>
                                    {kelvinToFarenheit(weatherObj.weatherInfo.main.temp_max)}&deg;
                                </Typography>
                                <Typography variant='h5' style={{margin: '1vh'}}>
                                    {kelvinToFarenheit(weatherObj.weatherInfo.main.temp_min)}&deg;
                                </Typography>
                            </div>
                            <Typography variant='h5'>
                                {weatherObj.weatherInfo.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default WeatherCards;