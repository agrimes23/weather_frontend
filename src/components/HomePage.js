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
        console.log(citySearch)
        props.getCityInfo(citySearch)
        navigate('/cityweather')
    }

    return (
        <div className='background'>
            <video src={videoBackground} autoPlay loop muted />
            <form onSubmit={handleSubmit}>
                <div className="container-fluid d-flex flex-column align-items-center content" >
                    <div className="home-page rounded text-center p-5 m-5">
                        <h1 className="trip">Find A City</h1>
                        <div className="row mt-5">
                                <div className="row w-75">
                                    <label htmlFor="search city weather">City: </label>
                                    <input type="text" className="rounded search-city p-3" placeholder='Search City' name="city" onChange={handleChange}/>
                                </div>
                                <input type="submit" className="row mt-4 btn btn-info w-25" value="Get Weather Info"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HomePage;