import { useState, useEffect } from 'react'


// Main home page where user can look up cities
const WeatherAPI = (props) => {
    let emptyCity = { city: '', state: '', notes: '' }
    const [addCity, setAddCity] = useState(emptyCity)
    const [sunriseTime, setSunriseTime] = useState("")
    const [sunsetTime, setSunsetTime] = useState("")
    const [checkCity, setCheckCity] = useState(false)
    // let checkCity = false
    // const cityName = ""

    const getRiseTime = () => {
        const date = new Date((props.weatherApi.sys ? props.weatherApi.sys.sunrise : null) * 1000)

        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        setSunriseTime(`${hour}:${min}:${sec}`)
    }

    const getSetTime = async () => {
        const date = new Date((props.weatherApi.sys ? props.weatherApi.sys.sunset : null) * 1000)

        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        setSunsetTime(`${hour}:${min}:${sec}`)
    }


    const checkCities = () => {
        props.userList.map((dbCity) => {
            if (dbCity.city === props.weatherApi.name) {
                setCheckCity(true)
            }
        })
    }
    // const hideButton = (event) => {
    //     setTimeout(1000)
        
    // }


    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(addCity)
        setCheckCity(true)
    }

    useEffect (() => {
        setCheckCity(false)
        
        setAddCity({...addCity, city: (props.weatherApi.name ? props.weatherApi.name : null), state: "Write the state here", notes: "Write any notes here"})
        getRiseTime()
        getSetTime()

        checkCities()

    }, [props.weatherApi])

    
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="show-city-div rounded d-flex flex-column align-items-center m-5 p-5">
                    {/* top part */}
                        <div className="d-flex justify-content-around w-100 head">
                            <h2 className="city-text text-white my-auto head">{props.weatherApi ? props.weatherApi.name : null}</h2>
                            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${props.weatherApi.weather ? props.weatherApi.weather[0].icon : null}@2x.png`}></img>
                    </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className="show-city-div rounded d-flex flex-column w-50 m-5 p-5 text-white">
                            <div className="d-flex flex-row justify-content-around">
                                <h5 className='head'>Max Temp: </h5>
                                <h5>{props.weatherApi.main ? props.weatherApi.main.temp_max : null} °F</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5 className="text-left green">Min Temp:</h5>
                                <h5 className="text-right">{props.weatherApi.main ? props.weatherApi.main.temp_min : null} °F</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5 className='red'>Humidity: </h5>
                                <h5>{props.weatherApi.main ? props.weatherApi.main.humidity : null}%</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5 className='blue'>Visibility: </h5>
                                <h5>{props.weatherApi.main ? props.weatherApi.visibility : null} km</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                            <h5 className='red-light'>Sunrise: </h5>
                                <h5>{sunriseTime}</h5>
                            
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <h5 className='purple'>Sunset: </h5>
                                <h5>{sunsetTime}</h5>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center m-auto'>

                            {checkCity ? <h3 className="show-city-div text-center p-3 rounded text-white">Already added to your dashboard!</h3> : <input type="submit" className='btn btn-info p-3' value="+ Add to List" /> }
                            
                        </div>
                    </div>
                </form>
            </>
        )

    
}

export default WeatherAPI;