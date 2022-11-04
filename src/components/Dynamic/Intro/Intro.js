import React from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading1, Heading2, IntroLink } from "../../StyledComponents/typography.css"
import Renderer from '../../Common/Rich-Text-Renderers/IntroRenderer'
import ArrowIcon from "../../../images/ArrowIcon"
const Intro = ({data}) => {
    const {
        heading, greyBackground, introHalfWidth, introduction, linkLabel, linkUrl
    } = data
  return (
    <SectionContainer marginBottom="xl" >
      <Heading1 marginBottom="sm">{heading}</Heading1>
     <Renderer node={introduction}/>
      {
        linkLabel && <IntroLink to={`/${linkUrl}`}> <Heading2>{linkLabel} <ArrowIcon/></Heading2></IntroLink>
      }
    </SectionContainer>
  )
}

export default Intro