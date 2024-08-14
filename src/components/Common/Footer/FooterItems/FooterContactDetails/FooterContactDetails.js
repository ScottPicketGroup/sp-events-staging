import { Link } from "gatsby"
import React from "react"
import { FooterItem, FooterLinksColumn } from "../../Footer.css"

const FooterContactDetails = () => {
  return (
    <FooterLinksColumn>
      <FooterItem marginBottom="md">CONTACT DETAILS</FooterItem>
      <FooterItem marginBottom="md">
        Email us at{" "}
        <a
          mailto="Enquiries@spevents.com.au"
          style={{ color: `white`, cursor: "pointer" }}
        >
          Enquiries@spevents.com.au
        </a>{" "}
        for general enquiries or fill out an event enquiry form{" "}
        <Link to="/enquiries" style={{ color: `white` }}>
          here
        </Link>
        .
      </FooterItem>

      <FooterItem>Phone: (03) 9089 7282</FooterItem>
    </FooterLinksColumn>

  )
}

export default FooterContactDetails
