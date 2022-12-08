import React from "react"

import {
  Heading1,
  Heading2,
  IntroLink,
} from "../../StyledComponents/typography.css"
import Renderer from "../../Common/Rich-Text-Renderers/IntroRenderer"
import ArrowIcon from "../../../images/ArrowIcon"
import EnquireForm from "./EnquireForm"
import { SectionContainer, SectionWrapper, executeScroll, ref } from "../../StyledComponents/containers.css"
const Enquire = ({ data, page }) => {
  const {
    enquireHeading,
    greyBackground,
    enquireDescription,
    linkLabel,
    linkUrl,
  } = data



  return (
    <SectionContainer
      paddingTop={page === 'enquiries' ? 'lg' : "xl"}
      isGreyBackground={greyBackground}
      width="100vw"
      paddingBottom="lg"
    >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="sm">{enquireHeading}</Heading1>
        <Renderer node={enquireDescription} />
        {linkLabel && (
          <IntroLink to={`/${linkUrl}`}>
            {" "}
            <Heading2>
              {linkLabel} <ArrowIcon />
            </Heading2>
          </IntroLink>
        )}
        <EnquireForm scrollRef={ref}/>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Enquire
