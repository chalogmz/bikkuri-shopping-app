import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Products from './Products'


const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerProducts = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 30px;
`

const ProductsHome = () => {
    return (
        <Container>
            <Title>HOT PRODUCTS</Title>
            <ContainerProducts>
                {popularProducts.map(item => (
                    <Products item={item} key={item.id}/>
                ))}
            </ContainerProducts>
        </Container>
    )
}


export default ProductsHome