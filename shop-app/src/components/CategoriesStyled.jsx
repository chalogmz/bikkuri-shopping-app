import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItemStyled from '../components/CategoryItemStyled'


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const CategoriesStyled = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItemStyled item={item}/>
            ))}
        </Container>
    )
}

export default CategoriesStyled
