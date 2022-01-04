import React from 'react'
import '../style/style.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Products = () => {
    return (
        <div className="p-container">
            <Navbar/>
            <Announcement/>

            <div className="p-wrapper">

                <div className="p-image-container">
                    <img className="p-img" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1641332149/c5_kagw52.jpg"/>
                </div>


                <div className="p-info-container">
                    <h1 className="p-title">Survive Hoodie</h1>
                    <p className="p-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat molestias eos voluptatibus impedit enim neque voluptatem ducimus alias mollitia sunt suscipit iste quia quasi ut cumque. Sed tenetur aperiam quam tempora. Quia temporibus tenetur, asperiores cupiditate assumenda amet suscipit in quod officiis cum fugiat. Quae sed sit alias sunt.</p>
                    <span className="p-price">$ 30</span>

                    <div className="p-filter-container">
                        <span className="p-filter-title">Color:</span>
                        <select className="p-filter-color">
                            <option disabled selected>--</option>
                            <option className="p-option1">black</option>
                            <option className="p-option2">darkblue</option>
                            <option className="p-option3">gray</option>
                        </select>
                        <span className="p-filter-title">Size:</span>
                        <select className="p-filter-size">
                            <option disabled selected>--</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    </div>

                    <div className="p-add-container">
                        <div className="p-amount-container">
                            <div className="p-remove"><i class="fas fa-minus"></i></div>
                            <div className="p-amount">1</div>
                            <div className="p-add"><i class="fas fa-plus"></i></div>
                        </div>
                        <button className="p-btn">ADD TO CART</button>
                    </div>
                </div>
            </div>

            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Products
