import { useState, useEffect } from 'react'


// This will be for adding notes to cities in the list
const Dashboard = () => {

    return (
        <>
            <div className="container-fluid w-100">
                <h1 className="text-center mt-5">Your Liked Cities</h1>
                
                {/* card container */}
                <div className="container-fluid w-75 p-5">

                    {/* card */}
                    <div className="card bg-dark text-white d-flex flex-row my-3 p-5">
                        <div className="col-md-6">
                            <h1>Chicago</h1>
                        </div>
                        <div className="col-md-6 text-right">
                            <h5>icon</h5>
                            <h5>degrees</h5>
                        </div>

                    </div>
                    <div className="card bg-dark text-white d-flex flex-row my-3 p-5">
                        <div className="col-md-6">
                            <h1>Chicago</h1>
                        </div>
                        <div className="col-md-6">
                            <h5>icon</h5>
                            <h5>degrees</h5>
                        </div>

                    </div>
                    <div className="card bg-dark text-white d-flex flex-row my-3 p-5">
                        <div className="col-md-6">
                            <h1>Chicago</h1>
                        </div>
                        <div className="col-md-6">
                            <h5>icon</h5>
                            <h5>degrees</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;