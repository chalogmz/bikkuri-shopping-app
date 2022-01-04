import React from 'react'
import '../style/style.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Login = () => {
    return (
        <div className="login-container">
            <Navbar/>
            <Announcement/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Login