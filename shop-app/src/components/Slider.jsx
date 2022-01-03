import React from 'react'
import {sliderItems} from '../data'
import '../style/style.css'

const Slider = () => {

    const { useState } = React

    const [slideIndex, setSlideIndex] = useState(0)
    
    const handleClick = (direction) => {

        if (direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

    return (
        <div className="slider-container">
            <div className="slider-leftArrow" onClick={() => handleClick("left")}><i class="fas fa-caret-left"></i></div>   
            <div className="slider-wrapper" slideIndex={slideIndex}>
                {sliderItems.map(item =>(

                <div className="slide">
                    <div className="slider-image">
                        <img className="slider-img" src={item.img} />
                    </div>
                    <div className="slider-info">
                        <h1 className="info-title">{item.title}</h1>
                        <p className="info-description">{item.description}</p>
                        <button className="info-btn">SHOP NOW</button>
                    </div>
                </div>
                ))}
                {/* <div className="slide">
                    <div className="slider-image">
                        <img className="slider-img" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1640917962/img2_y7isk5.jpg" />
                    </div>
                    <div className="slider-info">
                        <h1 className="info-title">WINTER SALE</h1>
                        <p className="info-description">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                        <button className="info-btn">SHOP NOW</button>
                    </div>
                </div>
                <div className="slide">
                    <div className="slider-image">
                        <img className="slider-img" src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1640917967/img1_ggccvn.jpg" />
                    </div>
                    <div className="slider-info">
                        <h1 className="info-title">POPULAR SALE</h1>
                        <p className="info-description">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                        <button className="info-btn">SHOP NOW</button>
                    </div>
                </div> */}
            </div>         
            <div className="slider-rightArrow" onClick={() => handleClick("right")}><i class="fas fa-caret-right"></i></div>            
        </div>
    )
}

export default Slider