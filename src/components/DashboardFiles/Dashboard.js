import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import video2 from '../../assets/weather-vid-2.mp4'
import axios from 'axios'
import WeatherMini from './WeatherMini'

// This will be for adding notes to cities in the list
const Dashboard = (props) => {
    const weatherData = []
    const navigate = useNavigate()


    const saveToArray = () => {

        props.userList.map((city) => {          
            setTimeout(() => {props.getCityInfo(city.city)}, 2000)
        })
        
    }

    // for edit route
    const handleSendID = (cityWeather) => {
        props.setEditID(cityWeather)
        navigate("/mylistcity")
    }

    useEffect (() => {

        saveToArray()

    }, [props.userList])

    return (
        <div className=''>
            <video className="background" src={video2} autoPlay loop muted />
            <div className="container-fluid w-100 content">
                <h1 className="text-center mt-5 dash two">My Map</h1>
                
                {/* card container */}
                <div className="container-fluid card-contain w-75 p-5">

                    {/* card */}
                    {props.userList.map((cityWeather) => {

                        return (
                            <div className="card city-card bg-dark text-white my-3 p-3">
                                <div className="info-card d-flex flex-row">
                                    <div className="col-md-6 my-3">
                                        <h1 className='text-center my-5 rowe'>{cityWeather.city}</h1>
                                    </div>
                                    <div className="col-md-6 text-center">

                                        <WeatherMini userCityNotes={cityWeather}/>
            
                                    </div>
                                </div>

                                <div className="button-card mx-auto pb-3">
                                    <button className="btn mt-2 mx-3 btn-danger" onClick={props.handleDelete} value={cityWeather.id}> - Remove</button>
                                    
                                    <button className="btn mt-2 mx-3 btn-warning" onClick={() => {handleSendID(cityWeather)}}>View Details</button>   
                                </div>
                            </div>
                        )

                    })}


                </div>
            </div>
        </div>
    )
}

export default Dashboard;