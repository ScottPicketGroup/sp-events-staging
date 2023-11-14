import React, { useRef } from "react"

import {
  Heading1,
  Heading2,
  IntroLink,
} from "../../../StyledComponents/typography.css"
import {
  SectionContainer,
  SectionWrapper,
} from "../../../StyledComponents/containers.css"
import Renderer from "../../../Common/Rich-Text-Renderers/IntroRenderer"
import ArrowIcon from "../../../../images/ArrowIcon"
import FunctionTrackerForm from "./FunctionTrackerForm"
const FTEnquire = ({ data, page }) => {
  const {
    enquireHeading,
    greyBackground,
    enquireDescription,
    linkLabel,
    linkUrl,
  } = data

  const heading = useRef()
  React.useEffect(() => {
    const isBrowser = typeof window !== "undefined"
    if (!isBrowser) {
      return
    }

    return console.log(
      "form info:",
      window && window.ftenquireinit(1180, "spevents")
    )
  }, [])
  return (
    <SectionContainer
      paddingTop={page === "enquiries" ? "lg" : "xl"}
      isGreyBackground={greyBackground}
      width="100vw"
      paddingBottom="lg"
    >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="sm" ref={heading}>
          {enquireHeading}
        </Heading1>
        <Renderer node={enquireDescription} />
        {linkLabel && (
          <IntroLink to={`/${linkUrl}`}>
            {" "}
            <Heading2>
              {linkLabel} <ArrowIcon />
            </Heading2>
          </IntroLink>
        )}
        <FunctionTrackerForm />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default FTEnquire
