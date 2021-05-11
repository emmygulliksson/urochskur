import react from 'react';
import axios from 'axios';

const baseURL= 'http://api.openweathermap.org/data/2.5/forecast?';
const apiKey='3434a41e4751b5969309b9363a302a9b';


const delay = interval => new Promise(resolve => setTimeout(resolve, interval));


const sendMessage = async (cityName)=>{
    await delay(100000);
    
    return axios.get(baseURL + `q=${cityName}&appid=${apiKey}`);;
  };

export const getWeatherData= async (cityName) =>{
    try{
        
        
        //Tror det är await här ovanför som gör loopen då den inte kallas på en async funktion så den inte får ut sitt promise.
        //Blir error utan den men testa göra det på ett annat sätt.

        //const {data}= await axios.get(baseURL + 'q=London&appid=a70472aab8b16f40783f2271ba271199');

        console.log(sendMessage);
        return sendMessage(cityName);

    }catch(error){
        console.log("HEEHEHEHEH");
        console.log(error.message);
        throw error;
    }
}

export default getWeatherData;
