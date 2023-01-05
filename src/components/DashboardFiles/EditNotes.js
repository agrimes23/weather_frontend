import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

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
        <form onSubmit={handleSubmit}>
            <h1>{props.editID.city}</h1>
            <h2>{props.editID.state}</h2>
            <textarea rows="5" cols="30" type="text" name="notes" value={notes.notes} onChange={handleChange}/>
            <input type="submit" className="btn btn-info"/>
        </form>
          {/* <form onSubmit={handleSubmit}>
                <div className="form-group row w-50 mt-3">
                    <label htmlFor="task-name">Todo Task: </label>
                    <input type="text" name="item" value={task.item} onChange={handleChange}/>
                </div>
                <div className="form-group row w-50 mt-3">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="desc" value={task.desc} onChange={handleChange}/>
                </div>
                <input type="submit" />
            </form>   */}
        </>
    )
}

export default EditNotes;