import { useState, useEffect } from 'react'


// Main home page where user can look up cities
const WeatherAPI = (props) => {
    let emptyCity = { city: '', state: '', notes: '' }
    const [addCity, setAddCity] = useState(emptyCity)
    const [sunriseTime, setSunriseTime] = useState("")
    const [sunsetTime, setSunsetTime] = useState("")

    const getRiseTime = () => {
        const date = new Date((props.weatherApi.sys ? props.weatherApi.sys.sunrise : null) * 1000)

        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        setSunriseTime(`${hour}:${min}:${sec}`)
    }

    const getSetTime = () => {
        const date = new Date((props.weatherApi.sys ? props.weatherApi.sys.sunset : null) * 1000)

        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        setSunsetTime(`${hour}:${min}:${sec}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addCity)
        props.handleCreate(addCity)
    }

    useEffect (() => {
        setAddCity({...addCity, city: (props.weatherApi ? props.weatherApi.name : null), state: "Write the state here", notes: "Write any notes here"})
        getRiseTime()
        getSetTime()
    }, [])
    
    
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="show-city-div rounded d-flex flex-column align-items-center m-5 p-5">
                    {/* top part */}
                        <div className="d-flex justify-content-around w-100">
                            <h2 className="city-text text-white my-auto">{props.weatherApi ? props.weatherApi.name : null}</h2>
                            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${props.weatherApi.weather ? props.weatherApi.weather[0].icon : null}@2x.png`}></img>
                    </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className="show-city-div rounded d-flex flex-column w-50 m-5 p-5 text-white">
                            <div className="d-flex flex-row justify-content-around">
                                <h5>Max Temp: </h5>
                                <h5>{props.weatherApi.main ? props.weatherApi.main.temp_max : null} °F</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5 className="text-left">Min Temp:</h5>
                                <h5 className="text-right">{props.weatherApi.main ? props.weatherApi.main.temp_min : null} °F</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5>Humidity: </h5>
                                <h5>{props.weatherApi.main ? props.weatherApi.main.humidity : null}%</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5>Visibility: </h5>
                                <h5>{props.weatherApi.main ? props.weatherApi.visibility : null} km</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                            <h5>Sunrise: </h5>
                                <h5>{sunriseTime}</h5>
                            
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5>Sunset: </h5>
                                <h5>{sunsetTime}</h5>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center m-auto'>                            
                            <input type="submit" className="btn btn-info p-3" value="+ Add to List" /> 
                        </div>
                    </div>
                </form>
            </>
        )

    
}

export default WeatherAPI;