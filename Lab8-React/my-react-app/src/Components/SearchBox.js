import { useState } from "react";
import './SearchBox.CSS'

export default function SearchBox(){
    const[CityName, setCityName] = useState("");
    const[forecasts, setforecasts] = useState([]);

    const handleKeyDown = (event) => {
        if(event.key === 'Enter' && CityName.trim().length >2){
            const URL = "http://api.weatherapi.com/v1/current.json?key=51236aca09894253905162316231705&q=" + CityName + "&aqi=n";
            try{ 
                const respons = awaitfetch(URL, {method: 'GET', headers: {Accept: 'application/json'}});
                if(!response.ok){
                throw new Error (`Error failed to send an HTTP Get Request: ${response.status}`);
            }
            const dataa = awaitresponse.json();
            console.log(data.forecast.forecastday);
            setforecasts(data.forecast.forecastday);
        }
        catch(err){
            console.error(err);
        }
    }

    function handleChange(event){
        setCityName(event.target.value);
    }

    return(
    <div>
        <input type="text"
        className="SearchBox"
        placeholder="Enter city name"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        />
        <h3> Wheather for {CityName} </h3>
        <ul>
            {forecasts.map(function(forecast, i){
                return(
                    <li key={i}>
                        <span>{forecast.data}</span>
                        <span>{forecast.data.maxtemp_c}</span>
                    </li>
                )
            })}
        </ul>
     </div>
    )
        }
    }