/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"


export default function InfoBox({info}) {
    let INT_IMG = "https://images.unsplash.com/18/misty-plank.JPG?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    let HOT_URL = "https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670428635685-dd49306e5622?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJhaW4lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";

    const getIcon = () => {
        if (info.humidity > 80) {
            return <ThunderstormIcon tyle={{ color: '#1976d2' }}/>
        } else if (info.temp > 15) {
            return <WbSunnyIcon style={{ color: '#fbc02d' }} />
        }
        else {
           return <AcUnitIcon style={{ color: '#42a5f5' }}/>
        }
    }

    return (
        <div className='Info-Box'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL :info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            
                        {info.city} { getIcon()}
                        
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temerature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>Weather can describe as <b>{info.weather}</b> and feels like : { info.fellsLike}&deg;C</p>
                    </Typography>
                    
      </CardContent>
    
    </Card>


        </div>
    )    
}