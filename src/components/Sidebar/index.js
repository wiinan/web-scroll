import React from 'react';
import {SidebarContainer,Icon,CloseIcon,SidebarLink,SideBtnWrap,SidebarRoute,SidebarWrapper,SidebarMenu} from './SidebarElement';

const Sidebar = ({toggle,isOpen}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>Descubra</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Servicos</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Registrar</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Logar</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;