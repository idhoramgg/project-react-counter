import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  color: black;
  font-size: 36px;
`;
const NavRight = styled.div`
  width: 66.666%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
const MenuLink = styled.a`
  font-size: 12px;
  display: inline-block;
  margin: 0 10px;
  color: black;
  text-decoration: none;
`;


function Header() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>Counter Practice</NavLeft>
        <NavRight>
          <MenuLink href="#home">  
          <h2>Home</h2>
          </MenuLink>
          <MenuLink href="#">
            <h2>Profile</h2>
          </MenuLink>
          <MenuLink href="#">
            <h2>About</h2>
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}
export default Header;