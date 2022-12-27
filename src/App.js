import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, Link } from 'react-router-dom'
import ShowCity from './components/ShowCity'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'


const App = () => {

  // do we need two to bring in both API and db?
  const [userList, setUserList] = useState([])
  const [weatherApi, setWeatherApi] = useState({})


  // returns user list 
  const getUserList = () => {
    axios.get('http://localhost:8000/api/forecast')
    .then((res) => setTimeout(() => setUserList(res.data), 2000)
    )
  }

// returns Open Weather API
  function getWeatherAPI () {
    axios.get('http://localhost:8000/api/info')
    .then((res) => setTimeout(() => setWeatherApi(res.data), 4000)
    )
  }

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


  useEffect(() => {
    getUserList()
    getWeatherAPI()
  }, [])

// console.log(weatherApi)

  return (
    <>
      <Navbar />
      <Routes>  
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/showlocation" element={<ShowCity userList={userList} weatherApi={weatherApi}/>} />
      </Routes>
    </>
  )
}

export default App;
