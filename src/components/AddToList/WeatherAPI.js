import { useState, useEffect } from 'react'


// Main home page where user can look up cities
const WeatherAPI = (props) => {

    // const [sunsetTime, setSunsetTime] = useState("")

    // const getTime = () => {
    //     const date = new Date(props.weatherApi.sys.sunset * 1000)
    //     const hours = date.getHours()
    //     const minutes = date.getMinutes()
    //     const seconds = date.getSeconds()

    //     setSunsetTime(`${hours}:${minutes}:`)
    // }

    // useEffect(() => {
    //     getTime()
    // })
    try {
        
        

        return (
            <>
                <div className="show-city-div rounded d-flex flex-column align-items-center m-5 p-5">
                {/* top part */}
                    <div className="d-flex justify-content-around w-100">
                        <h2 className="city-text text-white my-auto">{props.weatherApi.name}</h2>
                        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${props.weatherApi.weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <div className="show-city-div rounded d-flex flex-column w-50 m-5 p-5 text-white">
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Max Temp: </h5>
                            <h5>{props.weatherApi.main.temp_max} °F</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5 className="text-left">Min Temp:</h5>
                            <h5 className="text-right">{props.weatherApi.main.temp_min} °F</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Humidity: </h5>
                            <h5>{props.weatherApi.main.humidity}%</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Visibility: </h5>
                            <h5>{props.weatherApi.visibility}</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            {/* <h5>Sunrise: </h5>
                            <div>
                                {() => {
                                    const srHour = Date(props.weatherApi.sys.sunrise * 1000).getHours()
                                    const srMin = Date(props.weatherApi.sys.sunrise * 1000).getMinutes()
                                    const srSec = Date(props.weatherApi.sys.sunrise * 1000).getSeconds()

                                    return (<h5>{`${srHour}:${srMin}`}</h5>)
                                }}
                            </div> */}
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <h5>Sunset: </h5>
                            {/* <h5>{sunsetTime}</h5> */}
                            <h5>{props.weatherApi.sys.sunset}</h5>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center m-auto'>

                        {/* this will be a post request to userlist */}
                        <button className="btn btn-info p-3"> + Add to List</button>
                    </div>
                </div>
            </>
        )
    } catch (error) {
        return (
            <>
                <h1></h1>
            </>
        )
    }

    
}

export default WeatherAPI;