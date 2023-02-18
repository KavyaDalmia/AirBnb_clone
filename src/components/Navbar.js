import React from "react"
import logo from '../images/airbnb.png'
import '../style.css';


export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} className="nav--logo" />
        </nav>
    )
}