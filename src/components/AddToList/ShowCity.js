import { useState, useEffect } from 'react'
import WeatherAPI from './WeatherAPI'


// This will be for showing more info on the city's weather (not yet added to user list)
const ShowCity = (props) => {

    // // I think async is key for both apis to run at the same time. the axios.get on app.js runs just fine. 
    // // it's only causing errors when we try to show both on the same page. async will probably fix that but idk how to use it atm.


    // console.log()
    return (
        <>
            <div className="container-fluid w-100 show-city-page">
                {/* shows weather information for specific city */}
                <WeatherAPI weatherApi={props.weatherApi} />                   
            </div>
        </>
    )
}

export default ShowCity;





