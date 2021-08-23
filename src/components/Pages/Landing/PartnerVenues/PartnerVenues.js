import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ArrowIcon from "../../../../images/ArrowIcon"
import { SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import { BC3, Heading1, Heading2, Heading3 } from "../../../StyledComponents/typography.css"
import { PartnerVenuesLandingWrapper, TextContainer } from "./PartnerVenues.css"
const PartnerVenues = () => {
  return (
    <SectionContainer background="lightgrey" width="100%" full>
      <SectionWrapper>
        <Heading1>Partner Venues</Heading1>
        <PartnerVenuesLandingWrapper>
          <StaticImage
            placeholder="blurred"
            src="../../../../../images/OurFamily/estelle.png"
            alt="Chancery Lane"
            style={{
              width: `75%`,
              marginBottom: `.5rem`,
            }}
          />
          <TextContainer>
            <Heading2 marginBottom="">Partner Venues</Heading2>
            <Heading3>Sub Heading</Heading3>
            <BC3>
            .obacilpxe tnus atcid eativ eataeb otcetihcra isauq te sitatirev erotnevni olli ba eauq aspi euqae ,mairepa mer matot ,muitnadual euqmerolod muitnasucca metatpulov tis rorre sutan etsi sinmo ednu sitaicipsrep
            </BC3>
            <Heading3>Discover Move <ArrowIcon/></Heading3>
          </TextContainer>
        </PartnerVenuesLandingWrapper>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default PartnerVenues
