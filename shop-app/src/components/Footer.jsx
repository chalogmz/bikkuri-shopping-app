import React from 'react'
import '../style/style.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <h1 className="footer-logo">BIKKURI.</h1>
                <p className="footer-description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dignissimos sed quae tenetur ratione, veritatis corporis ullam repellendus necessitatibus quod, quasi culpa beatae, libero similique earum voluptatum qui quis quidem.</p>
                <div className="footer-socials">
                    <div className="footer-icon"><i class="fab fa-facebook-f"></i></div>
                    <div className="footer-icon"><i class="fab fa-instagram"></i></div>
                    <div className="footer-icon"><i class="fab fa-twitter"></i></div>
                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-center-title">Useful Links</h3>
                <ul className="footer-list">
                    <li className="footer-list-item">Home</li>
                    <li className="footer-list-item">Cart</li>
                    <li className="footer-list-item">Woman Fashion</li>
                    <li className="footer-list-item">Man Fashion</li>
                    <li className="footer-list-item">Accesories</li>
                    <li className="footer-list-item">My Account</li>
                    <li className="footer-list-item">Order Tracking</li>
                    <li className="footer-list-item">Whishlist</li>
                    <li className="footer-list-item">Terms</li>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="footer-right-title">Contact</h3>
                <div className="footer-contact-item"><i class="fas fa-map-marker-alt" style={{marginRight:"10px"}}></i>622 Dixie Path , Sout Tobinchester 98336</div>
                <div className="footer-contact-item"><i class="fas fa-phone-alt" style={{marginRight:"10px"}}></i>+1 234 56 78</div>
                <div className="footer-contact-item"><i class="fas fa-envelope" style={{marginRight:"10px"}}></i>contact@bikkuri.com</div>
                <img className="footer-img" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1641262647/payments_bv3sgr.png"/>
            </div>
        </div>
    )
}

export default Footer
