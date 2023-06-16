import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import video5 from '../../assets/weather-vid-1.mp4'

// This will be for showing more info on the city's weather including any notes user put (shows on user list)
const WeatherNotes = (props) => {

    const navigate = useNavigate()

    const [icon, setIcon] = useState()
    const [temp, setTemp] = useState()
    const [wData, setWData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const weatherData = []

    const getAxios = useCallback( async (city) => {
        await axios.get('https://weather-app-eevee.herokuapp.com/api/info/' + city)
        .then((res) => {
            setWData(res.data)
            setTemp(res.data.main.temp)
            setIcon(res.data.weather[0].icon)
        },
        
        (err) => console.log(err))
    })
    
    const redirectToEdit = () => {
        navigate('/mylistcity/edit')
    }

    useEffect(()=> {
        // I will try to use the city name to get data from each item in userList from dashboard
        getAxios(props.editID.city)
        
    }, [])
    

    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center">
                <video className="background" src={video5} autoPlay loop muted />
                <div className='edit-box pt-5 m-auto city-details '>
                    <h1>{props.editID.city}, {props.editID.state}</h1>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                    <h2 className="pb-4">{temp} °F</h2>
                    
                    <div className="d-flex flex-row justify-content-around">
                        <h5 className='head'>Max Temp: </h5>
                        <h5 className="text-white">{wData.main ? wData.main.temp_max : null}</h5>
                    </div>
                    <div className="d-flex flex-row justify-content-around">
                        <h5 className='green'>Min Temp: </h5>
                        <h5 className="text-white">{wData.main ? wData.main.temp_min : null}</h5>
                    </div>
                    <div className="d-flex flex-row justify-content-around">
                        <h5 className='red'>Humidity: </h5>
                        <h5 className="text-white">{wData.main ? wData.main.humidity : null}%</h5>
                    </div>
                    <div className="d-flex flex-row justify-content-around">
                        <h5 className='blue'>Visibility: </h5>
                        <h5 className="text-white">{wData.main ? wData.visibility : null} km</h5>
                    </div>
                    
                    <div className="mb-5">
                        <h3 className="mt-5">Your Notes: </h3>
                        <h3>{props.editID.notes}</h3>
                        <button className="btn btn-warning mt-3" onClick={redirectToEdit}> Edit Notes </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WeatherNotes;