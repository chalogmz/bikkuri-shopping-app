import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Products from './Products'


const ContainerProducts = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

const ProductsShow = () => {
    return (
        <ContainerProducts>
            {popularProducts.map(item => (
                <Products item={item} key={item.id}/>
            ))}
        </ContainerProducts>
    )
}

export default ProductsShow