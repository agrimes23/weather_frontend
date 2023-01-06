import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

// This will be for the little bit of info on the dashboard
const WeatherMini = (props) => {
    
    const [icon, setIcon] = useState()
    const [temp, setTemp] = useState()
    const [wData, setWData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const weatherData = []
    const navigate = useNavigate()

    const getAxios = useCallback( async (city) => {
        await axios.get('https://weather-app-eevee.herokuapp.com/api/info/' + city.city)
        .then((res) => {
            setWData(res.data)
            setTemp(res.data.main.temp)
            setIcon(res.data.weather[0].icon)
        },
        
        (err) => console.log(err))
    })
    

    useEffect(()=> {
        // I will try to use the city name to get data from each item in userList from dashboard
        getAxios(props.userCityNotes)
        
    }, [])

    return (
        <>
        <div className="mx-5 mb-4">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <h1>{temp} °F</h1>
        </div>
        
        </>
    )
}

export default WeatherMini;