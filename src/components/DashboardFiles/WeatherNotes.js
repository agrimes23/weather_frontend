import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import video5 from '../../assets/weather-vid-1.mp4'

// This will be for showing more info on the city's weather including any notes user put (shows on user list)
const WeatherNotes = (props) => {

    const navigate = useNavigate()

    const redirectToEdit = () => {
        navigate('/mylistcity/edit')
    }

    return (
        <>
            <div>
                <video className="background" src={video5} autoPlay loop muted />
                <div className='edit-box'>
                    <h1>{props.editID.city}</h1>
                    <h2>{props.editID.state}</h2>
                    <h3>Your Notes: {props.editID.notes}</h3>
                    <button className="btn btn-warning" onClick={redirectToEdit}> Edit </button>

                </div>
            </div>
        </>
    )
}

export default WeatherNotes;