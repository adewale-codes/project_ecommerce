import React, { useState } from "react";
import { Link } from "react-router-dom"
import {Badge} from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons';
import styled from "styled-components";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

  return (
    <Nav>
      <Logo>
        <Link to="/">
          Ade<span>Stores</span>
        </Link>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink>
          <Link to="/">
            Home
          </Link>
        </MenuLink>
        <MenuLink>
          <Link to="/ProductList">
            Products
          </Link>
        </MenuLink>
        <MenuLink>
          <Link to="/">
            Categories
          </Link>
        </MenuLink>
        <MenuLink>
          <Link to="/">
            About
          </Link>
        </MenuLink>
        <MenuLink>
          <Link to="/Login">
            Login
          </Link>
          </MenuLink>
        <MenuLink>
          <Link to="/Register">
            Register
          </Link>
        </MenuLink>
        <MenuLink>
          <Link to="/">
            Contact
          </Link>
          </MenuLink>
        <MenuLink>
          <Link to="/Cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Nav;


