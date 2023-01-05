import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// This will be for showing more info on the city's weather including any notes user put (shows on user list)
const WeatherNotes = (props) => {

    const navigate = useNavigate()

    const redirectToEdit = () => {
        navigate('/mylistcity/edit')
    }

    console.log(props.editID)
    return (
        <>
            <div>
                <h1>{props.editID.city}</h1>
                <h2>{props.editID.state}</h2>
                <h3>Your Notes: {props.editID.notes}</h3>
                <button className="btn btn-warning" onClick={redirectToEdit}> Edit </button>

            </div>
        </>
    )
}

export default WeatherNotes;