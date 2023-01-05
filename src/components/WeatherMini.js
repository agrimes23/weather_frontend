import { useState, useEffect } from 'react'


// This will be for the little bit of info on the dashboard
const WeatherMini = (props) => {
    
    useEffect(()=> {
        props.getCityInfo(props.cityInfo)
    }, [])

    return (
        <>
            {/* <img className="weather-icon" src={`http://openweathermap.org/img/wn/${props.weatherApi.weather ? props.weatherApi.weather[0].icon : null}@2x.png`} /> */}
            <h5>{props.weatherApi.main ? props.weatherApi.main.temp : null} °F</h5>
        </>
    )
}

export default WeatherMini;