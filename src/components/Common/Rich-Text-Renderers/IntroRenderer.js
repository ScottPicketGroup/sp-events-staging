
import React from "react"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  Heading1,
  Heading2,
  Heading3,
  BC1,
} from "../../StyledComponents/typography.css"
import { IntroWrapper } from "../../StyledComponents/containers.css"
const Renderer = ({ node, isExpanded, openWrapperHeight, introHalfWidth }) => {
  const [wrapperHeight, setWrapperHeight] = React.useState(0)

  const paragraphRef = React.useRef(null)
  const wrapperRef = React.useRef(null)
  React.useEffect(() => {
    setWrapperHeight(paragraphRef.current.clientHeight)
  }, [])
  const website_url = 'https://'
  const email_url = 'mailto'
  const options = {
    // renderMark: {
    //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    //   },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.PARAGRAPH]: (node, children, i) => (
        <BC1 marginBottom="sm" ref={paragraphRef} isExpanded={isExpanded}>
          {children}
        </BC1>
      ),
      [INLINES.HYPERLINK]: ({ data }, children) => (
     <span>   
        <a
        style={{fontFamily: `inherit`}}
            href={
                `${data.uri.startsWith(website_url) ? data.uri :  data.uri}`}
            target={`${data.uri.startsWith(website_url) ? '_blank' : ''}`}
            rel={`${data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
        >{children}</a></span>)


    },
  }

  return (
    <IntroWrapper
    introHalfWidth={introHalfWidth}
      wrapperHeight={wrapperHeight}
      isExpanded={isExpanded}
      ref={wrapperRef}
      openWrapperHeight={openWrapperHeight}
    >
      {renderRichText(node, options)}
    </IntroWrapper>
  )
}

export default Renderer
