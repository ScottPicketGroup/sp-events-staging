import React from "react"
import { FooterLinksColumn, FooterLinksGrid } from "../Footer.css"
import FooterVenueLinks from "./FooterVenueLinks/FooterVenueLinks"
import FooterNavigation from "./FooterLinks/FooterNavigation"
import FooterSocials from "./FooterSocials/FooterSocials"
import FooterContactDetails from "./FooterContactDetails/FooterContactDetails"
const FooterLinks = () => {
  return (
    <FooterLinksGrid>
      <FooterNavigation />
      <FooterVenueLinks />
      <FooterSocials />
      <FooterContactDetails />
      <FooterLinksColumn />
      <FooterLinksColumn />
    </FooterLinksGrid>
  )
}
export default FooterLinks
