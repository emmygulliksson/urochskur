import React, {useState, useEffect} from 'react';
import getCurrentWeather from "./Data/forecast5DaysWeather";


//import forecastWeather from "./Data/forecast5DaysWeather";

import './weather.css'
import logoimage from './img/logouroskur.png'
import sunriseimage from './img/sunrise.png'
import sundownimage from './img/sundown.png'


export default function Wheather() {
    const [weatherData, setCurrentWeatherData] =useState(null);
    const [city, setCity] = useState('Umeå');
    const [loading, setLoading] = useState(false);
  

   

    let date= new Date();

   

   // let sunrise= new Date(weatherData.sys.sunrise*1000);

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

      /*  const getForecastData =async () =>{
            try{
                setLoading(true);
                const forecastData = await forecastWeather(city);
                setCurrentWeatherData(forecastData);
                console.log(forecastData);
                setLoading(false);
    
            }catch(error){
                console.log(error.message);
                setLoading(false);
            }
    }*/
}

    useEffect(() => {
        getCurrentData();
    }, []);
        


    return (
        <div className="container">
            <div className="header">

                <div className="leftheader"> </div>
                
                <div className="mainheader"> <img src={logoimage} className="logo"></img></div>

                <div className="rightheader"> 
                <div className="search-form">
                    <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Sök efter plats"/>
                    <button type="button" onClick={() => getCurrentData()}>Sök</button>
                </div>
                </div>
                
                 
            </div>
        
            {weatherData !== null ? (  
                <div className="main-container">

                    <div className="leftmain"> </div>

                    <div className="middlemain"> 
                        
                        <div className="top"> 

                        <div className="temp"> 
                            
                            <h5>Live väderprognos</h5>
                            <div className="location">

                                <h1><i className="fa fa-street-view"></i>{weatherData.city.name} | {weatherData.city.country}</h1>
                                <h3>Idag: {parseFloat(weatherData.list[0].main.temp-273.15).toFixed(1)}&deg;C </h3>
                                <h3>Imorgon: {parseFloat(weatherData.list[1].main.temp-273.15).toFixed(1)}&deg;C </h3>
                                <h3>Övermorgon: {parseFloat(weatherData.list[2].main.temp-273.15).toFixed(1)}&deg;C </h3>
                                <h3>om 3 dagar: {parseFloat(weatherData.list[3].main.temp-273.15).toFixed(1)}&deg;C </h3>
                                <h3>om 3 dagar: {parseFloat(weatherData.list[39].main.temp-273.15).toFixed(1)}&deg;C </h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null }
          
        </div>
    );
}
