import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp, FaYoutube, FaFacebook } from 'react-icons/fa';
import {FooterWrap,FooterLinksContainer,FooterContainer,FooterLink,FooterLinkItems,FooterLinksWrapper,FooterLinkTitle,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from './FooterElement';

const Footer = () => {
    //const Data = new Date();
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle to='/signin'>Sobre Nós</FooterLinkTitle>
                                <FooterLink to='/'>Como trabalhamos</FooterLink>
                                <FooterLink to='/'>Trabalhos</FooterLink>
                                <FooterLink to='/'>Investimentos</FooterLink>
                                <FooterLink to='/'>Termos de uso</FooterLink>
                                <FooterLink to='/'>Suporte</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle to='/signin'>Contatos</FooterLinkTitle>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Whatsapp</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>E-mail</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Dolla</SocialLogo>
                        <WebsiteRights>dolla inc, {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' arial-label='Facebook'><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='Instagram'><FaInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='Youtube'><FaYoutube/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='Whatsapp'><FaWhatsapp/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='Git'><FaGithub/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
};
export default Footer;