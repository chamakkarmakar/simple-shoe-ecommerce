import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Shoe Commerce</h1>
                <nav class="navMenu">
                    <a href="/home">Home</a>
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <div class="dot"></div>
                </nav>
            </div>
        </div>
    )
}

export default Header
