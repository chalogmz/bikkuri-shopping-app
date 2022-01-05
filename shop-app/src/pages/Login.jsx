import React from 'react'
import '../style/style.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: black;
`

const Login = () => {
    return (
        <div className="login-container">
            <Navbar/>
            <Announcement/>
            <Container></Container>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Login