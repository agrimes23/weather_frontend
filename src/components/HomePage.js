import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import videoBackground from '../assets/weather-vid-1.mp4'

// Main home page where user can look up cities
// Needs to make a get request..?
const HomePage = (props) => {

    const [citySearch, setCitySearch] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCitySearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (citySearch === "") {
            alert("Please enter a city!")
        } else {
            props.getCityInfo(citySearch)
            navigate('/cityweather')
        }
        
    }

    return (
        <div className='background'>
            <video src={videoBackground} autoPlay loop muted />
            <form onSubmit={handleSubmit}>
                <div className="container-fluid d-flex flex-column align-items-center content" >
                    <div className="home-page rounded text-center p-3 mx-2">
                        <h1 className="trip mt-5">Find A City</h1>
                        <h3 className="hp-desc text-white mt-5 w-75 mx-auto">Use the input below to look up weather in a certain city and add cities to your dashboard!</h3>
                        <div className="input-button-div column d-flex justify-content-center space-between my-5">
                                <div className="input-div row">
                                    <label htmlFor="enter a city name"></label>
                                    <input type="text" className="rounded search-city" placeholder='Search City' name="city" onChange={handleChange}/>
                                </div>
                                <div className="button-div d-flex p-3 align-items-center">
                                    <input type="submit" className="row mt-4 py-2 px-3 btn btn-info" value="Get Weather Info"/>
                                </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HomePage;