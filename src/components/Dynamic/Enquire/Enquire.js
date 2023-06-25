import React, { useRef } from "react"

import {
  Heading1,
  Heading2,
  IntroLink,
} from "../../StyledComponents/typography.css"
import Renderer from "../../Common/Rich-Text-Renderers/IntroRenderer"
import ArrowIcon from "../../../images/ArrowIcon"
import EnquireForm from "./EnquireForm"
import {
  SectionContainer,
  SectionWrapper,
  executeScroll,
} from "../../StyledComponents/containers.css"
import FunctionTrackerForm from "./FunctionTrackerForm/FunctionTrackerForm"
const Enquire = ({ data, page }) => {
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
        {/* <EnquireForm scrollRef={heading} /> */}
        <FunctionTrackerForm id="ftenquire665" />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Enquire
