import React, {useState, useEffect} from 'react';
import {getCurrentWeather} from "./Data/CurrentWeatherAPI";

export default function Wheather() {
    const [weatherData, setCurrentWeatherData] =useState(null);
    const [city, setCity] = useState('Uppsala');
    const [loading, setLoading] = useState(false);

    const getCurrentData =async () =>{
        try{

            const currentData = await getCurrentWeather(city);
            setCurrentWeatherData(currentData);
            console.log(currentData);

        }catch(error){
            console.log(error.message);
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
                    <button type="button" onChange={(e) => getCurrentData()}>Sök</button>
                </div>     
            </div>
            {weatherData !== null ? (  
                <div className="main-container">
                    <h4>Live väderprognos</h4>
                    <div className="weather-icon">
                        <i className="fa fa-sun"></i>
                    </div>
                    <h3>{weatherData.weather[0].main}</h3>
                    <div className="temprature">
                        <h1>25&deg;C</h1>
                    </div>
                    <div className="location">
                        <h3><i className="fa fa-street-view"></i>{weatherData.name} | {weatherData.sys.country}</h3>
                    </div>
                    <div className="temprature-range">
                        <h6>Min: 15&deg;C || Max: 28&deg;C || Luftfuktighet: 12%</h6>
                    </div>

                </div>
            ) : null }
          
        </div>
    );
}
