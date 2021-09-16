import './App.css';
import React, {useState, useEffect} from 'react';
import WeatherCards from './components/WeatherCards';
import Search from './components/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import SideBar from './components/SideBar';
import AppBar from '@material-ui/core/AppBar';

function App() {
  const apiKey = 'db690c96c746078c5e6137873380815f';
  const [city, setCity] = useState('miami');
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const urlCurrWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  useEffect( () => {
    fetch(urlCurrWeather)
      .then(res => res.json())
      .then(data => {
        setWeatherInfo(data)
        setIsLoaded(true)
        console.log(weatherInfo)
      })
  }, [city, urlCurrWeather])

  return (
    <div className="App" >
      <div className='Nav'>
          <h1 style={{display: 'flex', justifySelf: 'flex-start'}}>Weather App</h1>
          <Search city={city} updateCity={setCity}/>
      </div>
      {/* the reason why I have isLoaded dictate if i should display my weather infomation is bc if its not load all of our code will
      this is a safe guard to make sure everything is loaded */}
      {(isLoaded) ? ( 
        <div>
          <div className='Sidebar'>
              <SideBar weather={weatherInfo} />
          </div>
          <WeatherCards weatherInfo={weatherInfo}/> 
        </div>
      ) : <CircularProgress />}
    </div>
  );
}

export default App;
