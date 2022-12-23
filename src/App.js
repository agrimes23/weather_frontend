import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, Link } from 'react-router-dom'
import ShowCity from './components/ShowCity'


const App = () => {

  // do we need two to bring in both API and db?
  const [userList, setUserList] = useState([])
  const [weatherApi, setWeatherApi] = useState({})


  // returns user list 
  const getUserList = () => {
    axios.get('http://localhost:8000/api/forecast')
    .then((res) => setUserList(res.data),
    (err) => console.log(err)
    )
  }

// returns Open Weather API
  function getWeatherAPI () {
    axios.get('http://localhost:8000/api/info')
    .then((res) => setWeatherApi(res.data),
    (err) => console.log(err)
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
      <Routes>
        <Route path="/showlocation" element={<ShowCity userList={userList} weatherApi={weatherApi}/>} />
      </Routes>
    </>
  )
}

export default App;
