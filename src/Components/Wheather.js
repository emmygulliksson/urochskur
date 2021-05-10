import React, {useState, useEffect} from 'react';
import getCurrentWeather from "./Data/CurrentWeatherAPI";

import './weather.css' 

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


   


   /* let weatherbkg = "Squall";

       weatherbkg = weatherData.weather[0].main;

      if (weatherbkg == "Mist") {
            document.body.background = mistpic;
        }
        else if (weatherbkg == "Rain" || weatherbkg == "Drizzle"){
            document.body.background = rainy; 
        }
        else if (weatherbkg == "Snow"){
            document.body.background = snow; 
        }
        else if (weatherbkg == "Cloudy"){
            document.body.background = cloudy;
        }
        else if (weatherbkg == "Clear"){
            document.body.background = sunny;
        }
        else if (weatherbkg == "Thunderstorm"){
            document.body.background = lightning;
        }
        else if (weatherbkg == "Sand"){
            document.body.background = sand;
        }
        else if (weatherbkg == "Squall"){
            document.body.background = squall;
        }


        else {
            document.body.background = rainypic;
        }

   */
    
    
        

   
    



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
                            </div>
                            <div className="weather-icon">
                                <img src={`http://openweathermap.org/img/w/${weatherData.list[1].weather.icon}.png`} alt ="weather icon"/>
                            </div>
                        
                             <h5>Kolla här {weatherData.list[0].weather.main}</h5> 

                           
                        </div>


                        <div className="min"> 
                            <h5>Min: {parseFloat(weatherData.list[0].main.temp_min -273.15).toFixed(1)}&deg;C </h5>
                        </div>
                        <div className="actual"> 
                        <div className="temprature">
                                <h1>{parseFloat(weatherData.list[0].main.temp -273.15).toFixed(1)}&deg;C</h1>
                            </div>
                            <div className="temprature-feel">
                                <h5>Känns som {parseFloat(weatherData.list[0].main.feels_like -273.15).toFixed(1)}&deg;C</h5>
                            </div>
                        </div>
                        <div className="max"> 
                            <h5>Max: {parseFloat(weatherData.list[0].main.temp_max-273.15).toFixed(1)}&deg;C </h5>
                        </div>
                        
                        
                           
                    
                          
                        
                        
                        </div>

                        <div className="bottom"> 
                            <div className="sun">
                                <div className="sunrise">  <img src={sunriseimage} className="logo"></img> <br></br> <h4>{new Date(weatherData.city.sunrise*1000).toLocaleTimeString("en-GB")}</h4> </div>
                                <div className="sundown"> <img src={sundownimage} className="logo"></img> <br></br> <h4>{new Date(weatherData.city.sunset*1000).toLocaleTimeString("en-GB")}</h4> </div>
                                <div className="temprature-range">
                                <h5> Luftfuktighet: {weatherData.list[0].main.humidity}%</h5>
                                </div>

                            </div>
                            <div className="wind">
                                <h5> Vinhastighet: {weatherData.list[0].wind.speed} m/s</h5>
                            </div>
                            <div className="cloud">
                                <h5> {weatherData.list[0].clouds.all}% molnighet</h5>
                            </div>
                            
                        
                        </div>

                        
                           
                    
                    </div>
                    
                    <div className="rightmain"> 
                    <h5> SAMMA TID IMORGON: {parseFloat(weatherData.list[9].main.temp -273.15).toFixed(1)}&deg;C</h5>
                    <h5> SAMMA TID ÖVERMORGON: {parseFloat(weatherData.list[19].main.temp -273.15).toFixed(1)}&deg;C</h5>
                    </div>
                    

                    

                </div>
            ) : null }
          
        </div>
    );
}