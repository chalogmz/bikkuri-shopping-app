import React from 'react'
import '../style/style.css'

const Newsletter = () => {
    return (
        <div>
            <div className="newsletter-container">
                <h1 className="newsletter-title">NEWSLETTER</h1>
                <p className="newsletter-description"></p>
                <div className="newsletter-input-container">
                    <input type="email" className="newsletter-input"></input>
                    <button className="newsletter-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
