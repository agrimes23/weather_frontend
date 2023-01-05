import { useState, useEffect } from 'react'
import video2 from '../../assets/weather-vid-2.mp4'


// This will be for adding notes to cities in the list
const Dashboard = () => {

    return (
        <div className='background'>
            <video src={video2} autoPlay loop muted />
            <div className="container-fluid w-100 content">
                <h1 className="text-center mt-5 dash two">My Map</h1>
                
                {/* card container */}
                <div className="container-fluid w-75 p-5">

                    {/* card */}
                    <div className="card bg-dark text-white d-flex flex-row my-3 p-5">
                        <div className="col-md-6">
                            <h1 className='rowe'>Chicago</h1>
                        </div>
                        <div className="col-md-6 text-right">
                            <h5>icon</h5>
                            <h5>degrees</h5>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;