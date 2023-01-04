import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import videoBackground from '../assets/weather-vid-1.mp4';

// Main home page where user can look up cities
// Needs to make a get request..?
const HomePage = (props) => {

    const [citySearch, setCitySearch] = useState("")

    const handleSubmit = (e) => {
        setCitySearch(e.target.value)
        
    }

    return (
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
        </div>
    )
}

export default HomePage;