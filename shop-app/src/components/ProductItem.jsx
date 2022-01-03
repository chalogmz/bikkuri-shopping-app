import React from 'react'
import '../style/style.css'

const ProductItem = ({item}) => {
    return (
        <div className="product-item-container">
            <div className="product-item-circle"></div>
            <img className="product-item-img" src={item.img}/>
            <div className="product-item-info">
                <div className="product-item-icon1"><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div className="product-item-info">
                <div className="product-item-icon2"><i class="fas fa-search"></i></div>
            </div>
            <div className="product-item-info">
                <div className="product-item-icon3"><i class="far fa-heart"></i></div>
            </div>
        </div>
    )
}

export default ProductItem
