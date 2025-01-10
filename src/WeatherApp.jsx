import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function Weather() {
    let [weatherInfo,setWeatherInfo] =useState({
        city:"Wanderland",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        weather: "haze",
        fellsLike: 24.04,
        humidity:34,

    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )

}