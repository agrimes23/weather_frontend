import { useState, useEffect } from 'react'
import WeatherAPI from './WeatherAPI'

// This will be for showing more info on the city's weather (not yet added to user list)
const ShowCity = (props) => {

    return (
        <>
            <div className="container-fluid w-100 show-city-page">
                <div className="show-city-div rounded d-flex flex-column align-items-center m-5 p-5">
                {/* top part */}
                    <div className="d-flex justify-content-around w-100">
                        <h2 className="text-white">location name</h2>
                        <h2 className="text-white">icon</h2>
                    </div>
                </div>
                
                {/* more info part */}
                <div className='d-flex flex-row'>
                    <div className="show-city-div rounded d-flex flex-column w-50 m-5 p-5 text-white">
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Max Temp: </h5>
                            <h5>text</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5 className="text-left">Min Temp:</h5>
                            <h5 className="text-right">text</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Humidity: </h5>
                            <h5>text</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Visibility: </h5>
                            <h5>text</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Sunrise: </h5>
                            <h5>text</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Sunset: </h5>
                            <h5>text</h5>
                        </div>
                    </div>

                    {/* add to your list */}
                    <div className='d-flex flex-column justify-content-center m-auto'>
                        <button className="btn btn-info p-3"> + Add to List</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowCity;





{/* <div className='bg-white'>

{props.userList.map((locInfo) => {
    return (
        <>
            <h1>{locInfo.city}</h1>
        </>
    )
})}
<WeatherAPI weatherApi={props.weatherApi} />

</div> */}