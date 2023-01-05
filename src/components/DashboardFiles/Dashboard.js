import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import video2 from '../../assets/weather-vid-2.mp4'
import axios from 'axios'



// This will be for adding notes to cities in the list
const Dashboard = (props) => {
    const [cityInfoObj, setCityInfoObj] = useState([{}])
    const [cityList, setCityList] = useState([])
    const weatherData = []
    const navigate = useNavigate()

    const getAxios = (city) => {
        axios.get('http://localhost:8000/api/info/' + city)
        .then((res) => {weatherData.push(res.data)},
        (err) => console.log(err))

        console.log("asewrew" + weatherData)
    }


    const saveToArray = () => {

        props.userList.map((city) => {          
            setTimeout(() => {getAxios(city.city)}, 1000)
           
        })
        console.log(weatherData)
        // cityList.map((weather) => {
        //     console.log("oh hi ")
        // })
        console.log("well hello")
    }

    const handleSendID = (cityWeather) => {
        // WIP
        console.log(cityWeather)
        props.setEditID(cityWeather)
        navigate("/mylistcity")
    }

    useEffect (() => {
        // setCityList([])
        saveToArray()
        // saveToObj()
        // saveToArray()
        // saveToObj()

    }, [props.userList])

 
    return (
        <div className=''>
            <video className="background" src={video2} autoPlay loop muted />
            <div className="container-fluid w-100 content">
                <h1 className="text-center mt-5 dash two">My Map</h1>
                
                {/* card container */}
                <div className="container-fluid w-75 p-5">

                    {/* card */}


                    
                    {props.userList.map((cityWeather) => {


                        return (
                            <div className="card bg-dark text-white d-flex flex-row my-3 p-5">
                            <div className="col-md-6">
                                <h1 className='rowe'>{cityWeather.city}</h1>
                            </div>
                            <div className="col-md-6 text-right">
                                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${props.weatherApi.weather ? props.weatherApi.weather[0].icon : null}@2x.png`} />
                                <h5>{cityWeather.temp} °F</h5>
                                <button className="btn btn-danger" onClick={props.handleDelete} value={cityWeather.id}> - Remove</button>
                                {/* <Link to="/mylistcity" relative="path"> */}
                                    <button className="btn btn-warning" onClick={() => {handleSendID(cityWeather)}}>View Details</button>
                                    {/* </Link> */}
                                
                            </div>
                            </div>
                        )

                    })}


                </div>
            </div>
        </div>
    )
}

export default Dashboard;