import React from 'react'
import '../style/style.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
    return (
        <div className="pl-container">
            <Navbar/>
            <Announcement/>
            <div className="pl-title"><h1>Dresses</h1></div>
            <div className="pl-filter-container">
                <div className="pl-filter">
                    <span className="pl-filter-text">Filter Products:</span>
                    <select className="pl-filter-select">
                        <option disabled selected>Color</option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                    <select className="pl-filter-select">
                        <option disabled selected>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className="pl-filter">
                    <span className="pl-filter-text">Sort Products:</span>
                    <select className="pl-filter-select">
                        <option selected>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default ProductList
