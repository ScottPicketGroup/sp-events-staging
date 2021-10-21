import React from "react"


import { FooterLinksColumn, FooterItem, FooterExternalLink } from "../../Footer.css"

const FooterSocials = () => {
  return (
    <FooterLinksColumn>
   <FooterItem marginBottom="md">SOCIALS</FooterItem>
   <FooterExternalLink marginBottom="sm" href="http://www.instagram.com" target="_blank" rel="no referer">Instagram</FooterExternalLink>
   <FooterExternalLink href="http://www.facebook.com" target="_blank" rel="no referer">Facebook</FooterExternalLink>
    </FooterLinksColumn>
  )
}

export default FooterSocials
