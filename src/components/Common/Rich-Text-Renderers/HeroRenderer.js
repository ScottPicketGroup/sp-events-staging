import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  Heading1,
  Heading2,
  Heading3,
  BC1,
  IntroHeading,
} from "../../StyledComponents/typography.css"
import { HeroTextWrapper, IntroWrapper } from "../../StyledComponents/containers.css"
const Renderer = ({ node, isExpanded, openWrapperHeight }) => {
  const [wrapperHeight, setWrapperHeight] = React.useState(0)

  const paragraphRef = React.useRef(null)
  const wrapperRef = React.useRef(null)
  React.useEffect(() => {
    setWrapperHeight(paragraphRef.current.clientHeight)
  }, [])

  console.log("isExpanded", openWrapperHeight)
  const options = {
    renderMark: {
        [MARKS.BOLD]: text => <strong style={{fontFamily: `CentraNo2Book`}}>{text}</strong>,
      },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.PARAGRAPH]: (node, children, i) => (
        <IntroHeading marginBottom="sm" ref={paragraphRef} isExpanded={isExpanded}>
          {children}
        </IntroHeading>
      ),
    },
  }

  return (
    <HeroTextWrapper
      wrapperHeight={wrapperHeight}
      isExpanded={isExpanded}
      ref={wrapperRef}
      openWrapperHeight={openWrapperHeight}
    >
      {renderRichText(node, options)}
    </HeroTextWrapper>
  )
}

export default Renderer
