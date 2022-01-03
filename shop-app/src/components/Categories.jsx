import React from 'react'
import '../style/style.css'
import {categories} from '../data'
import CategoryItem from '../components/CategoryItem'

const Categories = () => {
    return (
        <div className="category-container">
            {categories.map(item =>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Categories
