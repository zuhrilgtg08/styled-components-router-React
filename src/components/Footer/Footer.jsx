import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconsLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconsLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink 
                                    href='//www.twitter.com' 
                                    target='_blank' 
                                    aria-label='Twitter'
                                    rel='noopener noreference'>
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;