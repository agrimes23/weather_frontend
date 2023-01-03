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
                        <WeatherAPI weatherApi={props.weatherApi} />
                    </div>

                    {/* add to your list */}
                    <div className='d-flex flex-column justify-content-center m-auto'>

                        {/* this will be a put request to userlist */}
                        <button className="btn btn-info p-3"> + Add to List</button>
                    </div>
                </div>

                <div className='bg-white'>

                    {/* {props.userList.map((locInfo) => {
                        return (
                            <>
                                <h1>{locInfo.city}</h1>
                            </>
                        )
                    })} */}
                    

                </div>
            </div>
        </>
    )
}

export default ShowCity;





