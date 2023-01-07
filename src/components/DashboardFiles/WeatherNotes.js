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
        await axios.get('http://localhost:8000/api/info/' + city)
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
            <div>
                <video className="background" src={video5} autoPlay loop muted />
                <div className='edit-box'>
                    <h1>{props.editID.city}</h1>
                    <h2>{props.editID.state}</h2>
                    <h2>{temp}</h2>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                    <h3>Your Notes: {props.editID.notes}</h3>
                    <button className="btn btn-warning" onClick={redirectToEdit}> Edit </button>

                </div>
            </div>
        </>
    )
}

export default WeatherNotes;