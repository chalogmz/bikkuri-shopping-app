import React from 'react'
import '../style/style.css'

const ProductItem = ({item}) => {
    return (
        <div className="product-item-container">
            <div className="product-item-circle"></div>
            <img className="product-item-img" src={item.img}/>
            <div className="product-item-info">
                <div className="product-item-icon1"><span class="iconify" data-icon="ic:outline-shopping-cart" data-width="26" data-height="26"></span></div>
            </div>
            <div className="product-item-info">
                <div className="product-item-icon2"><span class="iconify" data-icon="bx:bx-search-alt-2" data-width="26" data-height="26"></span></div>
            </div>
            <div className="product-item-info">
                <div className="product-item-icon3"><span class="iconify" data-icon="akar-icons:heart" data-width="26" data-height="26"></span></div>
            </div>
        </div>
    )
}

export default ProductItem
