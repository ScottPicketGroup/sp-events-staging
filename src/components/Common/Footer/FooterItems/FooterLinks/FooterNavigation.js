import React from "react"
import { FooterLink, FooterLinksColumn } from "../../Footer.css"

const FooterNavigation = () => {

  const links = [
    { name: "Home", to: "/" },
    { name: "Venues", to: "/venues" },
    { name: "Events", to: "/events" },
    { name: "Sample Menus", to: "/sample-menus" },
    { name: "FAQ's", to: "/faqs" },
    { name: "Contacts", to: "/enquiries" },
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
