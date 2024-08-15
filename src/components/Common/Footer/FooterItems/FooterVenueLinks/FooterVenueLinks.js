import React from "react";
import useMenudata from "../../../../Menu/MenuSlideOut/menuEventTypesQuery";
import { FooterExternalLink, FooterLink, FooterLinksColumn } from "../../Footer.css";

const FooterVenueLinks = () => {
  const links = [
    { name: "Chancery Lane", to: "http://www.chancerylane.com.au" },
    { name: "Estelle", to: "http://www.theestelle.com.au" },
    { name: "Longrain", to: "http://www.longrainmelbourne.com" },
    { name: "Longsong", to: "http://www.longsong.com.au" },
    { name: "Le Shoppe", to: "http://www.leshoppe.com.au" },
    { name: "Matilda", to: "http://www.matilda159.com" },
  ];

  const menuItems = useMenudata();

  return (
      <FooterLinksColumn>
        <FooterExternalLink marginBottom="md">EXPERIENCES</FooterExternalLink>
        {menuItems[1] && menuItems[1].eventTypes && menuItems[1].eventTypes.map((item, index) => (
            <FooterLink
                marginBottom="sm"
                to={`/events/${item.pageName.toLowerCase().replace(" ", "-")}`}
                key={index}
            >
              {item.pageName}
            </FooterLink>
        ))}
        {links.map((link, index) => (
            <FooterExternalLink marginBottom="sm" href={link.to} key={index}>
              {link.name}
            </FooterExternalLink>
        ))}
      </FooterLinksColumn>
  );
};

export default FooterVenueLinks;
