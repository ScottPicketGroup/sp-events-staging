import React from 'react'
import { FooterItemsWrapper, FooterWrapper } from '../Footer.css'
import FooterLinks from './FooterLinks'
import Subscribe from './Subscribe/Subscribe'

const FooterItems = () => {
    return (
        <FooterWrapper>
           <FooterItemsWrapper>
               <FooterLinks />
               <Subscribe />
           </FooterItemsWrapper>
        </FooterWrapper>
    )
}

export default FooterItems
