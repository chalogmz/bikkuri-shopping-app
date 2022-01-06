import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
`

const Image = styled.img`
    width: 100%;
`

const Info = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    font-size: 55px;
    margin-bottom: 20px;
    font-weight: 800;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`

const CategoryItemStyled = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItemStyled
