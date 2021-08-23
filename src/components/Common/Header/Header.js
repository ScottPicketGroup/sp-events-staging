import React from "react"
import Enquire from "./Enquire"
import { HeaderWrapper, RightWrapper } from "./header.css"
import Logo from "./Logo"
import Menu from '../../Menu/Menu'
import Phone from "./Phone"
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <RightWrapper>
        <Enquire />
        <Phone/>
        <Menu />
      </RightWrapper>
    </HeaderWrapper>
  )
}

export default Header
