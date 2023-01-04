import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

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
        <>
            <form onSubmit={handleSubmit}>
                <div className="container-fluid d-flex flex-column align-items-center" >
                    <div className="home-page rounded text-center p-5 m-5">
                        <h1 className="text-white">Please Choose a City to get Started</h1>
                        <div className="row mt-5">
                                <div className="row w-75">
                                    <label className="text-white" htmlFor="search city weather">City: </label>
                                    <input type="text" className="rounded search-city p-3" placeholder='Search City' name="city" onChange={handleChange}/>
                                </div>
                                <input type="submit" className="row mt-4 btn btn-info w-25" value="Get Weather Info"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default HomePage;