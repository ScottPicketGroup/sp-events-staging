import React from "react"
import { FooterExternalLink, FooterLinksColumn } from "../../Footer.css"

const FooterVenueLinks = () => {

  const links = [
    { name: "Chancery Lane", to: "http://www.chancerylane.com.au" },
    { name: "Estelle", to: " http://www.theestelle.com.au" },
    { name: "Longrain", to: " http://www.longrainmelbourne.com" },
    { name: "Longsong", to: " http://www.longsong.com.au" },
    { name: "Le Shoppe", to: " http://www.leshoppe.com.au"},
    { name: "Matilda", to: " http://www.matilda159.com" },
  ]

  return (
    <FooterLinksColumn>
      <FooterExternalLink marginBottom="md">EXPERIENCES</FooterExternalLink>
      {links.map((link, i) => (
        <FooterExternalLink marginBottom="sm" href={link.to} referer="none" target="_blank" >
          {link.name}
        </FooterExternalLink>
      ))}

    </FooterLinksColumn>
  )
}

export default FooterVenueLinks
