import { Link } from "gatsby"
import React from "react"
import { FooterItem, FooterLinksColumn } from "../../Footer.css"

const FooterContactDetails = () => {
  return (
    <FooterLinksColumn>
      <FooterItem marginBottom="md">CONTACT DETAILS</FooterItem>
      <FooterItem>
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

      {/* <FooterItem>Phone: 0414 349 502</FooterItem> */}
    </FooterLinksColumn>
  )
}

export default FooterContactDetails
