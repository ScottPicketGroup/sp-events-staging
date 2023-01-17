import React from "react"

import {
  FooterLinksColumn,
  FooterItem,
  FooterExternalLink,
} from "../../Footer.css"

const FooterSocials = () => {
  return (
    <FooterLinksColumn>
      <FooterItem marginBottom="md">SOCIALS</FooterItem>
      <FooterExternalLink
        href="https://www.instagram.com/scottpickettevents/"
        target="_blank"
        rel="no referer"
      >
        Facebook
      </FooterExternalLink>
      <FooterExternalLink
        marginBottom="sm"
        href=" https://www.facebook.com/profile.php?id=100072255153533"
        target="_blank"
        rel="no referer"
      >
        Instagram
      </FooterExternalLink>
    </FooterLinksColumn>
  )
}

export default FooterSocials
