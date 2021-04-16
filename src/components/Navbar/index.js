import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem,NavBtn,NavBtnLink} from './NavbarElement';

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    })
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return(
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Logo</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Descubra</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Servicos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Registrar</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Logar</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}
export default Navbar;