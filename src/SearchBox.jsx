import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let[error,setError]=useState(false)

    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "6235ee78266827900d878396d19bda8e";

    let weatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponce = await response.json();
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMax: jsonResponce.main.temp_max,
                tempMin: jsonResponce.main.temp_min,
                humidity: jsonResponce.main.humidity,
                feelsLike: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description
            }
            console.log(result);
                return result
            } catch (err) {
                throw err;
            }
        

    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try {
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo =await weatherInfo();
        updateInfo(newInfo);
        } catch (err) {
            setError(true);
       }
    }

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                   
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange} 
                />
                <br /><br /> 
                <Button
                    variant="contained"
                    type='submit'
                    
                >Search
                </Button>
                {error && <p style={{color:"red"}}>No Such Place Found!</p>}
            </form>
            
        </div> 
    )
}