import { useState, useEffect } from 'react'
import WeatherAPI from './WeatherAPI'
import video3 from '../../assets/weather-vid-2.mp4'


// This will be for showing more info on the city's weather (not yet added to user list)
const ShowCity = (props) => {

    // // I think async is key for both apis to run at the same time. the axios.get on app.js runs just fine. 
    // // it's only causing errors when we try to show both on the same page. async will probably fix that but idk how to use it atm.

    // const [city, setCity] = useState("")

    // const [citySearch, setCitySearch] = useState("")
    // const navigate = useNavigate()

    // const handleChange = (e) => {
    //     setCitySearch({...citySearch, [e.target.name]: e.target.value})
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setCitySearch({...citySearch, ["notes"]: ""})
    //     console.log(citySearch)
    //     props.handleCreate(citySearch)
    // }

    return (
        <div className='background'>
            <video src={video3} autoPlay loop muted />
            <div className="container-fluid w-100 show-city-page">
                {/* shows weather information for specific city */}
                <WeatherAPI weatherApi={props.weatherApi} />                   
            </div>
        </div>
    )
}

export default ShowCity;




