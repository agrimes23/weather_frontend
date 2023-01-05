import { useState, useEffect } from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import videoBackground from '../assets/weather-vid-1.mp4';
=======
import { useNavigate, Link } from 'react-router-dom'
import videoBackground from '../assets/weather-vid-1.mp4'
>>>>>>> 47d5486ac7619b0eca7b5bd02130855db25ca651

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
<<<<<<< HEAD
        <div className='back'>
            <video src={videoBackground} autoPlay loop muted />
            <div className="container-fluid d-flex flex-column align-items-center entry">
                <div className="home-page rounded text-center p-5 m-5">
                    <h1 className="intro">FIND A CITY</h1>
                    <div className="d-inline-flex mt-5">
                        <input className="rounded search-city p-3" placeholder='Search City' name="city" />
                        <input type="submit" className="btn btn-info" value="Get Weather"/>
                    </div>
                </div>
            </div>
=======
        <div className='background'>
            <video src={videoBackground} autoPlay loop muted />
            <form onSubmit={handleSubmit}>
                <div className="container-fluid d-flex flex-column align-items-center content" >
                    <div className="home-page rounded text-center p-5 m-5">
                        <h1 className="trip">Find A City</h1>
                        <div className="column d-flex space-between mt-5">
                                <div className="row ">
                                    <label htmlFor="enter a city name"></label>
                                    <input type="text" className="rounded search-city p-3" placeholder='Search City' name="city" onChange={handleChange}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="submit" className="row mt-4 py-4 px-3 btn btn-info" value="Get Weather Info"/>
                                </div>
                        </div>
                    </div>
                </div>
            </form>
>>>>>>> 47d5486ac7619b0eca7b5bd02130855db25ca651
        </div>
    )
}

export default HomePage;