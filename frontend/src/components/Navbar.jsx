import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

    

    return (
        <div>
            <nav id="desktop-nav">
                <Link to="/">E-Commercing</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    )
}

export default Navbar