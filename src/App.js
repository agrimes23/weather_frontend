import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, Link } from 'react-router-dom'
import ShowCity from './components/AddToList/ShowCity'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Dashboard from './components/DashboardFiles/Dashboard'
import WeatherNotes from './components/DashboardFiles/WeatherNotes'
import EditNotes from './components/DashboardFiles/EditNotes'


const App = () => {

  // do we need two to bring in both API and db?
  const [userList, setUserList] = useState([])
  const [weatherApi, setWeatherApi] = useState([{}])
  // const [addCity, setAddCity] = useState([{name: "1", state: "2", notes: "3"}])
  const [editID, setEditID] = useState({})
  const [cityWeather, setCityWeather] = useState({})

  // returns user list 
  const getUserList = () => {
    axios.get('https://weather-app-eevee.herokuapp.com/api/forecast')
    .then((res) => setUserList(res.data),
    (err) => console.log(err)
    )
  }

  // returns Open Weather API
  const getCityInfo = (cityName) => {
    axios.get('https://weather-app-eevee.herokuapp.com/api/info/' + cityName)
    .then((res) => setWeatherApi(res.data),
    (err) => console.log(err)
    )
  }

  // adds a certain city, state, and notes to the db
  const handleCreate = (addCity) => {
    axios.post('https://weather-app-eevee.herokuapp.com/api/forecast', addCity)
    .then((res) => {
      getUserList()
    })
  }

  // deletes the city, state and notes from db
  const handleDelete = (event) => {
    axios.delete('https://weather-app-eevee.herokuapp.com/api/forecast/' + event.target.value)
    .then((response) => {
      getUserList()
    })
  }

  // updates notes or state in the database
  const handleUpdate = (editNote) => {
    axios.put('https://weather-app-eevee.herokuapp.com/api/forecast/' + editNote.id, editNote)
    .then((response) => {
      getUserList()
    })
  }

  useEffect(() => {
    getUserList()

  }, [])

  return (
    <>
      <Navbar />
      <Routes>  
        <Route path="/" element={<HomePage getCityInfo={getCityInfo} />}></Route>
        <Route path="/cityweather" element={<ShowCity userList={userList} handleCreate={handleCreate} weatherApi={weatherApi}/>} />
        <Route path="/mydashboard" element={<Dashboard setCityWeather={setCityWeather} setEditID={setEditID} setWeatherApi={setWeatherApi} weatherApi={weatherApi} getCityInfo={getCityInfo} userList={userList} handleDelete={handleDelete}/>}></Route>
        <Route path="/mylistcity" element={<WeatherNotes cityWeather={cityWeather} editID={editID} />}></Route>
        <Route path="/mylistcity/edit" element={<EditNotes setEditID={setEditID} handleUpdate={handleUpdate} editID={editID} />}></Route>
      </Routes>
    </>
  )
}

export default App;
