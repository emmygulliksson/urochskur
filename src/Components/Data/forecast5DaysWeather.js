import react from 'react';
import axios from 'axios';

const baseURL= 'http://api.openweathermap.org/data/2.5/forecast?';
const apiKey='3434a41e4751b5969309b9363a302a9b';

export const getWeatherData= async (cityName)=>{
    try{
        const {data}= await axios.get(baseURL + `q=${cityName}&appid=${apiKey}`);
        //const {data}= await axios.get(baseURL + 'q=London&appid=a70472aab8b16f40783f2271ba271199');

        console.log(data);
        return data;

    }catch(error){
        console.log(error.message);
        throw error;
    }
}

export default getWeatherData;