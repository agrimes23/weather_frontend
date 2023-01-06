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
        //    console.log(props.weatherApi)
        })
        
        console.log("well hello")
    }

    // for edit route
    const handleSendID = (cityWeather) => {
        // WIP
        console.log(cityWeather)
        props.setEditID(cityWeather)
        navigate("/mylistcity")
    }

    useEffect (() => {
        // setCityList([])
        saveToArray()

    }, [props.userList])

 
// if true, 

    return (
        <div className=''>
            <video className="background" src={video2} autoPlay loop muted />
            <div className="container-fluid w-100 content">
                <h1 className="text-center mt-5 dash two">My Map</h1>
                
                {/* card container */}
                <div className="container-fluid w-75 p-5">

                    {/* card */}
                    {props.userList.map((cityWeather) => {

                        return (
                            <div className="card bg-dark text-white d-flex flex-row my-3 p-5">
                                <div className="col-md-6">
                                    <h1 className='my-5 rowe'>{cityWeather.city}</h1>
                                </div>
                                <div className="col-md-6 mb-3 text-right">

                                    <WeatherMini userCityNotes={cityWeather}/>

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