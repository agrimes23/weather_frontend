import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import video2 from '../../assets/weather-vid-2.mp4'

// This will be for editing notes to cities in the list
const EditNotes = (props) => {

    const [notes, setNotes] = useState({...props.editID})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setNotes({...notes, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setEditID(notes)
        props.handleUpdate(notes)
        navigate('/mylistcity')
    }

    return (
        <>
        <video className="background" src={video2} autoPlay loop muted />
        <form className='edit-box' onSubmit={handleSubmit}>
            <h1>{props.editID.city}</h1>
            <input type="text" name="state" value={notes.state} onChange={handleChange}/>
            <textarea rows="5" cols="30" type="text" name="notes" value={notes.notes} onChange={handleChange}/>
            <input type="submit" className="btn btn-info"/>
        </form>
        </>
    )
}

export default EditNotes;