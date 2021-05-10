import React, {useState, useEffect} from 'react';
import getCurrentWeather from "./Data/CurrentWeatherAPI";
<<<<<<< HEAD
import './weather.css' 
=======
//import forecastWeather from "./Data/forecast5DaysWeather";

import './weather.css'
>>>>>>> f7baf371a87b99080d01d4c1b749f040ce8150f2
import logoimage from './img/logouroskur.png'
import sunriseimage from './img/sunrise.png'
import sundownimage from './img/sundown.png'

<<<<<<< HEAD
=======
import rainypic from './img/rainy.jpg'

import mistpic from './img/mist.jpg'

import gif from './img/giffi.gif'


>>>>>>> d5b34d8d292b2a5413d739ffd6aa0468c2764271

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


   


    let weatherbkg = "Rain";

      //  weatherbkg = weatherData.weather[0].main;

        if (weatherbkg == "Mist") {
            document.body.background = mistpic;
        }
        else if (weatherbkg == "Rain"){
            document.body.background = gif;
        }

        else {
            document.body.background = rainypic;
        }

   
    
    
        

   
    



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

                                <h1><i className="fa fa-street-view"></i>{weatherData.name} | {weatherData.sys.country}</h1>
                            </div>
                            <div className="weather-icon">
                                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                        
                             <h5>{weatherData.weather[0].main}</h5> 

                           
                        </div>


                        <div className="min"> 
                            <h5>Min: {parseFloat(weatherData.main.temp_min -273.15).toFixed(1)}&deg;C </h5>
                        </div>
                        <div className="actual"> 
                        <div className="temprature">
                                <h1>{parseFloat(weatherData.main.temp -273.15).toFixed(1)}&deg;C</h1>
                            </div>
                            <div className="temprature-feel">
                                <h5>Känns som {parseFloat(weatherData.main.feels_like -273.15).toFixed(1)}&deg;C</h5>
                            </div>
                        </div>
                        <div className="max"> 
                            <h5>Max: {parseFloat(weatherData.main.temp_max-273.15).toFixed(1)}&deg;C </h5>
                        </div>
                        
                        
                           
                    
                          
                        
                        
                        </div>

                        <div className="bottom"> 
                            <div className="sun">
                                <div className="sunrise">  <img src={sunriseimage} className="logo"></img> <br></br> <h4>{new Date(weatherData.sys.sunrise*1000).toLocaleTimeString("en-GB")}</h4> </div>
                                <div className="sundown"> <img src={sundownimage} className="logo"></img> <br></br> <h4>{new Date(weatherData.sys.sunset*1000).toLocaleTimeString("en-GB")}</h4> </div>
                                <div className="temprature-range">
                                <h5> Luftfuktighet: {weatherData.main.humidity}%</h5>
                                </div>

                            </div>
                            <div className="wind">
                                <h5> Vinhastighet: {weatherData.wind.speed} m/s</h5>
                            </div>
                            <div className="cloud">
                                <h5> {weatherData.clouds.all}% molnighet</h5>
                            </div>
                            
                        
                        </div>

                        
                           
                    
                    </div>
                    
<<<<<<< HEAD
                    <div className="rightmain">    </div>
=======
                    <div className="rightmain"> 
                 

                    </div>
>>>>>>> f7baf371a87b99080d01d4c1b749f040ce8150f2
                    

                    

                </div>
            ) : null }
          
        </div>
    );
}
