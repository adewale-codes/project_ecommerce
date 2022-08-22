import React from 'react'
import styled from 'styled-components'
import payment from "../images/payment.png"
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons';

const Footer = () => {

    const Container = styled.div`
        display: flex;
    `;

    const Left = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;
    `;

    const Logo = styled.h1`
        color: #7b7fda;
        text-decoration: none;
        font-weight: 800;
        font-size: 1.7rem;
        span {
            font-weight: 300;
            font-size: 1.3rem;
        }
    `;

    const Description = styled.p`
        margin: 20px 0px;
    `;

    const SocialContainer = styled.div`
        display: flex;
    `;

    const SocialIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: #${props=>props.color};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    `;

    const Center = styled.div`
        flex: 1;
        padding: 20px;
    `;

    const Title = styled.h3`
        margin-bottom: 30px;
    `;

    const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    `;

    const ListItem = styled.li`
        width: 50%;
        margin-bottom: 10px;
    `;

    const Right = styled.div`
        flex: 1;
        padding: 20px;
    `;

    const ContactItem = styled.div`
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    `;

    const Payment = styled.img`
        width: 50%;
    `;

  return (
    <Container>
      <Left>
        <Logo>Ade<span>Stores</span></Logo>
        <Description>Welcome to ADESHOP where you can buy your favorite things at a go without the need to come to a physical store fully online</Description>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Women's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}} />
            NO 54 Lawyer Atanda Street
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}} />
            +234 813 2494 814
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}} />
            adewaleabiola78@gmail.com
        </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  )
}

export default Footer
