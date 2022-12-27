import { useState, useEffect } from 'react'


// Main home page where user can look up cities
const HomePage = () => {

    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center" >
                <div className="home-page rounded text-center p-5 m-5">
                    <h1 className="text-white">Please Choose a City to get Started</h1>
                    <div className="d-inline-flex mt-5">
                        <input className="rounded search-city p-3" placeholder='Search City' name="city" />
                        <button className="btn btn-info" >Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;