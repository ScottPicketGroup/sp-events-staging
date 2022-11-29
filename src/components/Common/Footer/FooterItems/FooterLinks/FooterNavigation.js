import React from "react"
import { FooterLink, FooterLinksColumn } from "../../Footer.css"

const FooterNavigation = () => {

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Venues", to: "/venues" },
    { name: "Sample Menus", to: "/sample-menus" },
    { name: "FAQs", to: "/faqs" },
    { name: "Talk to Us", to: "/enquiries" },
    { name: "Privacy", to: "/" },
  ]

  return (
    <FooterLinksColumn>
      <FooterLink marginBottom="md">SP EVENTS</FooterLink>
      {links.map((link, i) => (
        <FooterLink marginBottom="sm" to={link.to}>
          {link.name}
        </FooterLink>
      ))}

    </FooterLinksColumn>
  )
}

export default FooterNavigation
