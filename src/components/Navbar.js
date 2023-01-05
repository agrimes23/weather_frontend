import { useState, useEffect } from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'


// Main home page where user can look up cities
const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-dark sticky-top p-3 navbar">
                <Link className=" text-decoration-none" to='/' >
                    <h3 className="navbar-brand mx-3 "><i className="fa-solid fa-cloud-sun-rain logo "></i></h3>
                </Link>

                <div>
                    <ul className="nav navbar-nav navbar-right text-white mx-3">
                        <Link className=" text-decoration-none dash" to='/mydashboard'><li>My Dashboard</li></Link>
<<<<<<< HEAD
                        <Link className=" text-decoration-none" to='/cityweather'><li>ShowPageShortcut</li></Link>
=======
>>>>>>> 47d5486ac7619b0eca7b5bd02130855db25ca651
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;