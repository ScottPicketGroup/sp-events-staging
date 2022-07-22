import React from "react"
import Renderer from "../../Common/Rich-Text-Renderers/Intro"
import { SectionContainer } from "../../StyledComponents/containers.css"
import {  Heading1, Heading2 } from "../../StyledComponents/typography.css"

const Intro = ({introduction, pageTitle}) => {
  const [openWrapperHeight, setOpenWrapperHeight] =  React.useState(0)

  const [isExpanded, setIsExpanded] = React.useState(false)
  const wrapperRef= React.useRef(null)
  React.useEffect(() => {
    console.log('introduction', introduction)
    setOpenWrapperHeight(wrapperRef.current.clientHeight * 2)
}, [])
  
  return (
    <SectionContainer marginBottom="xl" ref={wrapperRef} style={{height: `auto`}}>
  
      <Heading1 marginBottom="sm">{pageTitle}</Heading1>
      <Renderer node={introduction} isExpanded={isExpanded} openWrapperHeight={openWrapperHeight}/>
      <Heading2
      onClick={() => setIsExpanded(!isExpanded)}
      > Learn More</Heading2>
    </SectionContainer>
  )
}

export default Intro
