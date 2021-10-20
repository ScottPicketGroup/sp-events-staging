import React from "react"
import { FooterItem } from "../../Footer.css"
import { SubscribeWrapper } from "./Subscribe.css"
import SubscribeForm from "./SubscribeForm"

const FooterSocials = () => {
  return (
    <SubscribeWrapper>
      <FooterItem marginBottom="sm">SUBSCRIBE</FooterItem>
      <FooterItem marginBottom="md">
      Sign up for updates from the Scott Pickett Group and be the first to hear about events, collaborations and more. 
      </FooterItem>
      <SubscribeForm />
    </SubscribeWrapper>
  )
}

export default FooterSocials
