import { useState, useEffect } from 'react'
import WeatherAPI from './WeatherAPI'

// This will be for showing more info on the city's weather (not yet added to user list)
const ShowCity = (props) => {

    return (
        <>
            <div className="container-fluid m-5">
                <div className='bg-white'>
                    {props.userList.map((locInfo) => {
                        return (
                            <>
                                <h1>{locInfo.city}</h1>
                            </>
                        )
                    })}
                    <WeatherAPI weatherApi={props.weatherApi} />
                    
                </div>
            </div>
        </>
    )
}

export default ShowCity;