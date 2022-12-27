import { useState, useEffect } from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'


// Main home page where user can look up cities
const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-dark sticky-top p-3">
                <Link className=" text-decoration-none" to='/' >
                    <h3 className="navbar-brand mx-3"><i className="fa-solid fa-cloud-sun-rain logo"></i></h3>
                </Link>

                <div>
                    <ul className="nav navbar-nav navbar-right text-white mx-3">
                        <Link className=" text-decoration-none" to='/dashboard'><li><a>My Dashboard</a></li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;