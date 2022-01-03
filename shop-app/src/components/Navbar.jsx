import React from 'react'
import '../style/style.css'


const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <span className="nav-language">EN</span>
                    <div className="nav-search-container">
                        <input type="text" className="nav-search-bar"></input>
                        <i className="nav-icon-search" class="fas fa-search"></i>
                    </div>
                </div>
                <div className="nav-center">
                    <div className="nav-logo"><h1>BIKKURI.</h1></div>
                </div>
                <div className="nav-right">
                    <div className="nav-menu-item">REGISTER</div>
                    <div className="nav-menu-item">SIGN IN</div>
                    <div className="nav-menu-item"><i class="fas fa-shopping-cart"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
