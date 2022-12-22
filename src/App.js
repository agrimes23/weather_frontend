import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, Link } from 'react-router-dom'


const App = () => {

  // do we need two to bring in both API and db?
  const [userList, setUserList] = useState([])

  const getUserList = () => {
    axios.get('')
    .then((res) => setUserList(res.data),
    (err) => console.log(err)
    )
  }

  const handleCreate = (addNote) => {
    axios.post('http://localhost:8000/api/userlist', addNote)
    .then((res) => {
      console.log(res.data)
      getUserList()
    })
  }

  // might need to change???
  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/api/userlist/' + event.target.value)
    .then((response) => {
      getUserList()
    })
  }

  // might need to change ???
  const handleUpdate = (editNote) => {
    console.log(editPerson)
    axios.put('http://localhost:8000/api/userlist/' + editNote.id, editNote)
    .then((response) => {
      getUserList()
    })
  }


  useEffect(() => {
    getUserList()
  }, [])

  return (
    <>
      <h1> Oh how's the weather today? 🧐 </h1>
    </>
  )
}

export default App;
