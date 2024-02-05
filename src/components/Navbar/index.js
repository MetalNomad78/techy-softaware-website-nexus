import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
// import { DiCssdeck } from 'react-icons/di';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
//import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'>
          <Link to="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <img
              src="https://i.ibb.co/3M5SZFB/techy-software-high-resolution-logo-transparent.png"
              alt="Your Logo"
              style={{ height: '3rem', marginRight: '8px' }}
            />
            {/* <DiCssdeck size="3rem" /> */}
            {/* <Span>Portfolio</Span> */}
          </Link>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href='#skills'>Services</NavLink>
          <NavLink href='#education'>Clients</NavLink>
        </NavItems>
        
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar