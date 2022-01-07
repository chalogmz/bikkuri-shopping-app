import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1; 
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BIKKURI.</Logo>
                <Desc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dignissimos sed quae tenetur ratione, veritatis corporis ullam repellendus necessitatibus quod, quasi culpa beatae, libero similique earum voluptatum qui quis quidem.
                </Desc>
                <SocialContainer>
                    <SocialIcon><i class="fab fa-facebook-f"></i></SocialIcon>
                    <SocialIcon><i class="fab fa-instagram"></i></SocialIcon>
                    <SocialIcon><i class="fab fa-twitter"></i></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whislist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><i class="fas fa-map-marker-alt" style={{marginRight:"10px"}}></i>622 Dixie Path , South Tobinchester 98336</ContactItem>
                <ContactItem><i class="fas fa-phone-alt" style={{marginRight:"10px"}}></i>+1 234 56 78</ContactItem>
                <ContactItem><i class="fas fa-envelope" style={{marginRight:"10px"}}></i>contact@bikkuri.com</ContactItem>
                <Payment src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1641262647/payments_bv3sgr.png"/>
            </Right>
        </Container>
    )
}

export default Footer
