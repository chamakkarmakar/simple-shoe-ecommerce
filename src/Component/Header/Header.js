import React from 'react'
import "./Header.css"
const Header = () => {
    return (
            <div className='header'>
                <h1>Shoe Commerce</h1>
                <nav className="navMenu">
                    <a href="/home">Home</a>
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <div className="dot"></div>
                </nav>
            </div>
    )
}

export default Header
