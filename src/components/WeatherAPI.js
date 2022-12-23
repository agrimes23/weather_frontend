import { useState, useEffect } from 'react'


// Main home page where user can look up cities
const WeatherAPI = (props) => {

    return (
        <>
            <h1>{props.weatherApi.main.temp}</h1>
        </>
    )
}

export default WeatherAPI;