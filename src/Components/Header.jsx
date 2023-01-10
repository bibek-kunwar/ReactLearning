import React from 'react'
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Header = () => {
  return (
    <MainHeader>
      <NavLink>
        <img src="./Images/logo.png" alt="logo"  class="logo "/>
      </NavLink>
      <Navbar/>
    </MainHeader>

  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header