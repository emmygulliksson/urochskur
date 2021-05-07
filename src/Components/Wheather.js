import React, {useState, useEffect} from 'react';
import getCurrentWeather from "./Data/CurrentWeatherAPI";

export default function Wheather() {
    const [weatherData, setCurrentWeatherData] =useState(null);
    const [city, setCity] = useState('Luleå');
    const [loading, setLoading] = useState(false);

    const getCurrentData =async () =>{
        try{
            setLoading(true);
            const currentData = await getCurrentWeather(city);
            setCurrentWeatherData(currentData);
            console.log(currentData);
            setLoading(false);

        }catch(error){
            console.log(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getCurrentData();
    }, []);

    return (
        <div className="app">
            <div className="card">
                <h2 className="title">< i className="fa fa-cloud"></i>UR O SKUR</h2>
                <div className="search-form">
                    <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Sök efter plats"/>
                    <button type="button" onClick={() => getCurrentData()}>Sök</button>
                </div>     
            </div>
        
            {weatherData !== null ? (  
                <div className="main-container">
                    <h4>Live väderprognos</h4>
                    <div className="weather-icon">
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt ="weather icon"/>
                    </div>
                    <h3>{weatherData.weather[0].main}</h3>
                    <div className="temprature">
                        <h1>{parseFloat(weatherData.main.temp -273.15).toFixed(1)}&deg;C</h1>
                    </div>
                    <div className="temprature-feel">
                        <h1>Känns som: {parseFloat(weatherData.main.feels_like -273.15).toFixed(1)}&deg;C</h1>
                    </div>
                    <div className="location">
                        <h3><i className="fa fa-street-view"></i>{weatherData.name} | {weatherData.sys.country}</h3>
                    </div>
                    <div className="temprature-range">
                        <h6>Min: {parseFloat(weatherData.main.temp_min -273.15).toFixed(1)}&deg;C 
                        || Max: {parseFloat(weatherData.main.temp_max -273.15).toFixed(1)}&deg;C 
                        || Luftfuktighet: {weatherData.main.humidity}%</h6>
                    </div>

                </div>
            ) : null }
          
        </div>
    );
}
