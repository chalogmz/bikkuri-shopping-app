import React from 'react'
import '../style/style.css'

const CategoryItem = ({item}) => {
    return (
        <div className="category-item-container">
            <div className="category-item-image">
                <img className="category-item-img" src={item.img}/>
                <div className="category-item-info">
                    <h1 className="category-item-title">{item.title}</h1>
                    <button className="category-item-btn">SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem
