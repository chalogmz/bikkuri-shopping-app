import React from 'react'
import {popularProducts} from '../data'
import ProductItem from './ProductItem'
import '../style/style.css'

export const ProductsHome = () => {
    return (

        <div className="product">
            <div className="product-main-title">
                <h1 className="product-title">HOT PRODUCTS</h1>
            </div>
            <div className="products-container">
                {popularProducts.map(item => (
                    <ProductItem item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsHome