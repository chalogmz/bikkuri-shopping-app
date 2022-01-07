import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 80%;
    margin-left: 50px;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;
`
const Desc = styled.p`
    margin: 20px 0px;
    width: 80%;
    text-align: justify;
`
const Price = styled.span`
    font-size: 40px;
    font-weight: 200;
`
const FilterContainer = styled.div`
    width: 30%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const Remove = styled.div``

const Amount = styled.span`
    font-size: 18px;
    width: 30px;
    height: 30px;
    border-radius: 25%;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`
const Add = styled.div``

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4;
    }
`


const ProductDetail = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1641332149/c5_kagw52.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>SURVIVE HOODIE</Title>
                    <Desc>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis enim expedita aliquid omnis iusto beatae natus quod, autem hic voluptas, molestiae ex? Aspernatur at nisi pariatur magnam quos sunt eius quidem distinctio optio vel! Aut ab nam blanditiis ipsa tempora neque maiores nemo perferendis a nostrum vero dolores enim eum impedit incidunt aliquid, delectus reprehenderit doloribus debitis iure rerum tenetur.
                    </Desc>
                    <Price>$ 30.00</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove><i class="fas fa-minus"></i></Remove>
                            <Amount>1</Amount>
                            <Add><i class="fas fa-plus"></i></Add>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductDetail
