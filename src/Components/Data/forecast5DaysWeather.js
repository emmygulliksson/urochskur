import react from 'react';
import axios from 'axios';

const baseURL= 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey='a70472aab8b16f40783f2271ba271199';

export const forecast5DaysWeather= async (cityName)=>{
    state = {
        fullData: [],
        dailyData: []
      }


    try{
        const {data}= await axios.get(baseURL + `q=${cityName}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({
            fullData: data.list,
            dailyData: dailyData
          }, () => console.log(this.state))
        });
        //const {data}= await axios.get(baseURL + 'q=London&appid=a70472aab8b16f40783f2271ba271199');

        console.log(data);
        return data;

    }catch(error){
        console.log(error.message);
        throw error;
    }

    
}
 


export default forecast5DaysWeather;