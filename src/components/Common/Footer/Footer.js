import React from 'react'
import { FooterWrapper } from './Footer.css'
import FooterItems from './FooterItems/FooterItems'
import LogoSliderNew from './LogoSlider/LogoSlider'
// import LogoSlider from './LogoSlider-old'

const Footer = ({menuOpen, setMenuOpen, activePage, setActivePage}) => {
    return (
        <FooterWrapper >
            <LogoSliderNew />
            <FooterItems />
        </FooterWrapper>
    )
}

export default Footer
