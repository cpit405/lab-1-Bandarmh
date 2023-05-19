import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox() {
    const [cityName, setCityName] = useState('');
    const [forecasts, setForecast] = useState([]);

    //without theuseEffect hook
    const handleKeyDown = async(event) =>{
        if (event.key === 'Enter' && cityName().trim().length>2) {
            const URL = "http://api.weatherapi.com/v1/current.json?key=51236aca09894253905162316231705&q=" + CityName + "&aqi=n";
            try{
                const respons = await fetch(URL, {mothod: 'GET', header: {Accept: 'application/json'}});
                if(!Response.ok){
                    throw new Error(`Error faild to send an HTTP GET request: ${response.status}`);
                }
                const data = await respons.json();
                console.log(data.forecasts.forecastsday);
                setForecast(data.forecasts.forecastsday)
            }
            catch(err){
                console.error(err);
            }
            
        }
    }

    function handleChange(event) {
        setCityName(event.target.value)
    }

    return (
        <div>
            <input type="text"
                className="searchBox"
                placeholder="Enter city name"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <ul>
            {forecasts.map(function(pforecast, i){
                return( 
                <li key ={i}>
                    <span>{forecasts.data}</span>
                    <span>{forecasts.data.maxtemp_c}</span>
                     </li>

                )
            })
        }
           </ul>
        </div>
    )
}