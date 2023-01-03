import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, Link } from 'react-router-dom'
import ShowCity from './components/ShowCity'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import WeatherNotes from './components/WeatherNotes'



const App = () => {

  // do we need two to bring in both API and db?
  const [userList, setUserList] = useState([])
  const [weatherApi, setWeatherApi] = useState({})
  const [citySearch, setCitySearch] = useState("")

  // returns user list 
  const getUserList = () => {
    console.log("I'm running!")
    axios.get('http://localhost:8000/api/forecast')
    .then((res) => setUserList(res.data),
    (err) => console.log(err)
    )
  }

// returns Open Weather API
  const getWeatherAPI = () => {
    console.log("Same here!")
    axios.get('http://localhost:8000/api/info')
    .then((res) => setWeatherApi(res.data),
    (err) => console.log(err)
    )
  }

  // returns Open Weather API
  // const getCityInfo = (cityName) => {
  //   console.log("Same here!")
  //   axios.get('http://localhost:8000/api/info/' + cityName)
  //   .then((res) => setCitySearch(res.data),
  //   (err) => console.log(err)
  //   )
  // }


  // Trying to get both API calls to work
  // const getAllData = () => {
  //   const openWeatherAPI = 'http://localhost:8000/api/info'
  //   const userSavedData = 'http://localhost:8000/api/forecast'

  //   const getOpenWeatherAPI = axios.get(openWeatherAPI) 
  //   const getUserSavedData = axios.get(userSavedData)

  //   axios.all([getOpenWeatherAPI, getUserSavedData]).then(
  //     axios.spread((...allData) =>{
  //       const allDataWeather = allData[0].data
  //       const getUserWeatherData = allData[1].data

  //       console.log(allDataWeather)
  //       console.log(getUserWeatherData)
  //     })
  //   )
  // }


  const handleCreate = (addNote) => {
    axios.post('http://localhost:8000/api/forecast', addNote)
    .then((res) => {
      console.log(res.data)
      getUserList()
    })
  }

  // might need to change???
  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/api/forecast/' + event.target.value)
    .then((response) => {
      getUserList()
    })
  }

  // might need to change ???
  const handleUpdate = (editNote) => {
    axios.put('http://localhost:8000/api/forecast/' + editNote.id, editNote)
    .then((response) => {
      getUserList()
    })
  }


  // will I need to upt getUserList in the brackets?
  useEffect(() => {
    // getAllData()
    getUserList()
    getWeatherAPI()
  }, [])

// console.log(weatherApi)

  return (
    <>
      <Navbar />
      <Routes>  
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cityweather" element={<ShowCity citySearch={citySearch} getUserList={getUserList} getWeatherAPI={getWeatherAPI} userList={userList} weatherApi={weatherApi}/>} />
        <Route path="/mydashboard" element={<Dashboard />}></Route>
        <Route path="/mylistcity" element={<WeatherNotes />}></Route>
      </Routes>
    </>
  )
}

export default App;
