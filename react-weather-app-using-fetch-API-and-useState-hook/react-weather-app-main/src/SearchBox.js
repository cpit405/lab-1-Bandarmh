import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox() {
    const [cityName, setCityName] = useState('');


    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            console.log('Did hit Enter key');
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
            <h2>You've typed: {cityName} </h2>
        </div>
    )
}