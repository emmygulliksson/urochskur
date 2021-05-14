import React, {useState, useEffect} from 'react';
import getWeatherData from "./Data/forecast5DaysWeather";
import dateFormat from 'dateformat';
import './weather.css'
import logoimage from './img/logouroskur.png'
import sunriseimage from './img/sunrise.png'
import sundownimage from './img/sundown.png'
import search from './img/searchicon.png'
import mistpic from './img/mist.jpg'
import rainy from './img/raingif.gif'
import cloudy from './img/gifcloudy.gif'
import lightning from './img/giflightning.gif'
import sand from './img/gifsand.gif'
import snow from './img/gifsnow.gif'
import sunny from './img/gifsunny.gif'
import pretty from './img/prettygif.gif'
import squall from './img/flying.gif'





export default function Wheather() {
    const [weatherData, setWeatherData] =useState(null);
    const [city, setCity] = useState('Umeå');
    const [loading, setLoading] = useState(false);

  
    const getCurrentData =async () =>{
        try{
            setLoading(true);
            const currentData = await getWeatherData(city);
            setWeatherData(currentData);
            setLoading(false);
            getbkg(currentData.list[0].weather[0].main);
         
        }catch(error){
            console.log(error.message);
            setLoading(false);
        }
}
    useEffect(() => {
        getCurrentData();
        console.log("hi");
        console.log(getCurrentData())
     
    
       
    }, []);

    let getbkg =  async (weatherbkg) =>{

        //weatherbkg = weatherData.list[0].weather[0].main;
        if (weatherbkg === "Mist" || weatherbkg === "Smoke" || weatherbkg === "Haze" || weatherbkg === "Dust" || weatherbkg === "Fog" || weatherbkg === "Ash") {
                document.body.background = mistpic;
            }
            else if (weatherbkg === "Rain" || weatherbkg === "Drizzle"){
                document.body.background = rainy; 
            }
            else if (weatherbkg === "Snow"){
                document.body.background = snow; 
            }
            else if (weatherbkg === "Clouds"){
                document.body.background = cloudy;
            }
            else if (weatherbkg === "Clear"){
                document.body.background = sunny;
            }
            else if (weatherbkg === "Thunderstorm"){
                document.body.background = lightning;
            }
            else if (weatherbkg === "Sand"){
                document.body.background = sand;
            }
            else if (weatherbkg === "Squall"){
                document.body.background = squall;
            }
            else if (weatherbkg === "Tornado"){
                document.body.background = squall;
            }
            else {
                document.body.background = pretty;
            }
    }


    

  
    return (
        <div className="container">
            <div className="header">
                <div className="leftheader"> </div>
                
                <div className="mainheader"> <img src={logoimage} className="logo"></img></div>
                <div className="rightheader"> 
                <div className="search-form">
                
                    <input id="input" type="text" onChange={(e) => setCity(e.target.value) } placeholder="Sök efter plats" onKeyPress={event => {
                    if (event.key === 'Enter') {
                    getCurrentData()
                    }
                    }} />
                    <button type="button" onClick={() => getCurrentData()}>  <img src={search}></img> </button>
                </div>
                </div>
                
                 
            </div>
        
            {weatherData !== null ? (  
                <div className="main-container">
                    <div className="leftmain"> 
                    <div className="left1">
                            <h5>{dateFormat(new Date(weatherData.list[8].dt*1000).toLocaleDateString("sv-SE"), "dddd, mmmm dS")}</h5> 
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png`} alt ="weather icon"/>
                            <h5>{parseFloat(weatherData.list[8].main.temp -273.15).toFixed(1)}&deg;C</h5>
                         </div>
                         <div className="left2">
                            <h5>{dateFormat(new Date(weatherData.list[16].dt*1000).toLocaleDateString("sv-SE"), "dddd, mmmm dS") }</h5> 
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[16].weather[0].icon}.png`} alt ="weather icon"/>
                            <h5>{parseFloat(weatherData.list[16].main.temp -273.15).toFixed(1)}&deg;C</h5>
                         </div>
                         <div className="left3">
                            <h5>{dateFormat(new Date(weatherData.list[24].dt*1000).toLocaleDateString("sv-SE"), "dddd, mmmm dS") }</h5> 
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[24].weather[0].icon}.png`} alt ="weather icon"/>
                            <h5>{parseFloat(weatherData.list[24].main.temp -273.15).toFixed(1)}&deg;C</h5>
                         </div>
                         <div className="left4">
                            <h5>{dateFormat(new Date(weatherData.list[32].dt*1000).toLocaleDateString("sv-SE"),"dddd, mmmm dS" ) }</h5> 
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[32].weather[0].icon}.png`} alt ="weather icon"/>
                            <h5>{parseFloat(weatherData.list[32].main.temp -273.15).toFixed(1)}&deg;C</h5>

                         </div>
             
                   </div>
                    <div className="middlemain"> 
                        
                        <div className="top"> 
                        <div className="temp"> 
                        
                           
                            <h5>Live väderprognos</h5>
                            <div className="location">
                                <h1><i className="fa fa-street-view"></i>{weatherData.city.name} | {weatherData.city.country}</h1>
                                <h5> {dateFormat(new Date(weatherData.list[0].dt*1000).toLocaleDateString("sv-SE"), "dddd, mmmm dS")}</h5> 
                            </div>
                            <div className="weather-icon">
                                <img src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`} alt ="weather icon"/>
                             </div>

                            {/*   <h5>Kolla här {weatherData.list[0].weather[0].description}</h5>  */}
                             
                      

                         </div>
                        <div className="min"> 
                       
                                 <div className="sunrise">  <img src={sunriseimage} className="logo"></img> <br></br> <h5>{new Date(weatherData.city.sunrise*1000).toLocaleTimeString("en-GB")}</h5> </div>
                                 <div className="sundown"> <img src={sundownimage} className="logo"></img> <br></br> <h5>{new Date(weatherData.city.sunset*1000).toLocaleTimeString("en-GB")}</h5> </div>
                                 <div className="sunrise">  <img src={sunriseimage} className="logo"></img> <br></br> <h5>{new Date(weatherData.city.sunrise*1000).toLocaleTimeString("sv-SE")}</h5> </div>
                                 <div className="sundown"> <img src={sundownimage} className="logo"></img> <br></br> <h5>{new Date(weatherData.city.sunset*1000).toLocaleTimeString("sv-SE")}</h5> </div>
                            
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
                            <h5>Min: {parseFloat(weatherData.list[0].main.temp_min -273.15).toFixed(1)}&deg;C </h5>
                        </div>
                        
                        
                        </div>

                        <div className="center"> 
                            <button className="hours">Vädret de kommande 24 timmarna</button>
                            <button className="days">Vädret de kommande dagarna</button>
                        </div>

                        <div className="bottom"> 
                        <div className="bottom1">
                            <h5>{dateFormat(new Date(weatherData.list[1].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[1].main.temp -273.15).toFixed(1)}&deg;C</h3>
                        
                        </div>
                        <div className="bottom2">
                            <h5>{dateFormat(new Date(weatherData.list[2].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[2].main.temp -273.15).toFixed(1)}&deg;C</h3>
                        
                        </div>
                        <div className="bottom3">
                            <h5>{dateFormat(new Date(weatherData.list[3].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[3].main.temp -273.15).toFixed(1)}&deg;C</h3>
                          
                        </div>
                        <div className="bottom4">
                            <h5>{dateFormat(new Date(weatherData.list[4].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[4].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[4].main.temp -273.15).toFixed(1)}&deg;C</h3>
                    
                        </div>
                        <div className="bottom5">
                            <h5>{dateFormat(new Date(weatherData.list[5].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[5].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[5].main.temp -273.15).toFixed(1)}&deg;C</h3>
                         
                        </div>
                        <div className="bottom6">
                            <h5>{dateFormat(new Date(weatherData.list[6].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[6].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[6].main.temp -273.15).toFixed(1)}&deg;C</h3>
                          
                        </div>
                        <div className="bottom7">
                            <h5>{dateFormat(new Date(weatherData.list[7].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[7].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[7].main.temp -273.15).toFixed(1)}&deg;C</h3>
                    
                        </div>
                        <div className="bottom8">
                            <h5>{dateFormat(new Date(weatherData.list[8].dt_txt), "HH:MM")}</h5> 
                            <div className="weather-icon">
                            <img src={`http://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png`} alt ="weather icon"/>
                            </div>
                            <h3>{parseFloat(weatherData.list[8].main.temp -273.15).toFixed(1)}&deg;C</h3>
                        
                        </div>
                        </div>
                       
                           
                    
                     </div>

                     <div className="rightmain"> 
                        
                            <div className="humidity">
                                 <h5> Luftfuktighet: {weatherData.list[0].main.humidity}%</h5>
                                 </div>
                            <div className="wind">
                                <h5> Vindhastighet: {weatherData.list[0].wind.speed} m/s</h5>
                            </div>
                            <div className="cloud">
                                <h5> {weatherData.list[0].clouds.all}% molnighet</h5>
                            </div>

                     </div>


                    
                </div>
            ) : null }
           
        </div>
        
    );
   
}


