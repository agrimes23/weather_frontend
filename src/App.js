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

  // returns user list 
  const getUserList = () => {
    console.log("I'm running!")
    axios.get('http://localhost:8000/api/forecast')
    .then((res) => setUserList(res.data),
    (err) => console.log(err)
    )
  }

// returns Open Weather API
  // const getWeatherAPI = () => {
  //   console.log("Same here!")
  //   axios.get('http://localhost:8000/api/info')
  //   .then((res) => setWeatherApi(res.data),
  //   (err) => console.log(err)
  //   )
  // }

  // returns Open Weather API
  const getCityInfo = (cityName) => {
    console.log("Same here!")
    axios.get('http://localhost:8000/api/info/' + cityName)
    .then((res) => setWeatherApi(res.data),
    (err) => console.log(err)
    )
  }

  const handleCreate = (addCity) => {
    axios.post('http://localhost:8000/api/forecast', addCity)
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
    getUserList()

  }, [])

// console.log(weatherApi)

  return (
    <>
      <Navbar />
      <Routes>  
        <Route path="/" element={<HomePage getCityInfo={getCityInfo} />}></Route>
        <Route path="/cityweather" element={<ShowCity handleCreate={handleCreate} weatherApi={weatherApi}/>} />
        <Route path="/mydashboard" element={<Dashboard setEditID={setEditID} setWeatherApi={setWeatherApi} weatherApi={weatherApi} getCityInfo={getCityInfo} userList={userList} handleDelete={handleDelete}/>}></Route>
        <Route path="/mylistcity" element={<WeatherNotes editID={editID} />}></Route>
        <Route path="/mylistcity/edit" element={<EditNotes setEditID={setEditID} handleUpdate={handleUpdate} editID={editID} />}></Route>
      </Routes>
    </>
  )
}

export default App;
