import { useState, useEffect } from 'react'


// Main home page where user can look up cities
const WeatherAPI = (props) => {
 
    try {
        return (
            <>
                <div className="d-flex flex-row justify-content-around">
                            <h5>Max Temp: </h5>
                            <h5>{props.weatherApi.main.temp_max}</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5 className="text-left">Min Temp:</h5>
                            <h5 className="text-right">{props.weatherApi.main.temp_min}</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Humidity: </h5>
                            <h5>{props.weatherApi.main.humidity}</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Visibility: </h5>
                            <h5>{props.weatherApi.visibility}</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Sunrise: </h5>
                            <h5>{props.weatherApi.sys.sunrise}</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Sunset: </h5>
                            <h5>{props.weatherApi.sys.sunset}</h5>
                        </div>
            </>
        )
    } catch (error) {
        return (
            <>
                <h1>gg</h1>
            </>
        )
    }

    
}

export default WeatherAPI;