import { useState, useEffect } from 'react'


// This will be for editing notes to cities in the list
const EditNotes = () => {

    return (
        <>
          <form onSubmit={handleSubmit}>
                <div className="form-group row w-50 mt-3">
                    <label htmlFor="task-name">Todo Task: </label>
                    <input type="text" name="item" value={task.item} onChange={handleChange}/>
                </div>
                <div className="form-group row w-50 mt-3">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="desc" value={task.desc} onChange={handleChange}/>
                </div>
                <input type="submit" />
            </form>  
        </>
    )
}

export default EditNotes;