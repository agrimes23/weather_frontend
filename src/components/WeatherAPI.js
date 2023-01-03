import { useState, useEffect } from 'react'


// Main home page where user can look up cities
const WeatherAPI = (props) => {
 
   console.log() 

    try {
        return (
            <>
                <h1>{props.weatherApi.main.temp}</h1>
            </>
        )
    } catch (error) {
        return (
            <>
                <h1></h1>
            </>
        )
    }

    
}

export default WeatherAPI;