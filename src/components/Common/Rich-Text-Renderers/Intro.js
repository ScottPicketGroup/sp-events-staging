import React from 'react'
import { BLOCKS} from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1, Heading2, Heading3, BC1 } from "../../StyledComponents/typography.css"
import styled from 'styled-components';
const Renderer = ({ node, isExpanded }) => {
const [wrapperHeight, setWrapperHeight] = React.useState(0)
const [openWrapperHeight, setOpenWrapperHeight] = React.useState(0)
const paragraphRef = React.useRef(null)
const wrapperRef= React.useRef(null)
React.useEffect(() => {
    setWrapperHeight(paragraphRef.current.clientHeight)
    setOpenWrapperHeight(wrapperRef.current.clientHeight)
}, [])

console.log(paragraphRef.current)
    const options = {
        // renderMark: {
        //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        //   },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.PARAGRAPH]: (node, children, i) => <IntroWrapper><BC1 marginBottom="sm" ref={paragraphRef} wrapperHeight='100' isExpanded={isExpanded}>{children}</BC1> </IntroWrapper>
        },
    }

    return (
        <IntroWrapper wrapperHeight={wrapperHeight} isExpanded={isExpanded} ref={wrapperRef} openWrapperHeight={openWrapperHeight}>

            { renderRichText(node, options)}
        </IntroWrapper>
    )
}

export default Renderer

export const IntroWrapper = styled.div`
  max-height: ${props => props.isExpanded ? `${props.openWrapperHeight }px` : `${ props.wrapperHeight + 20}px`};
  overflow: hidden;
  margin-bottom: 1rem;
  transition: max-height 0.5s ease;
`;

// paragraphRef && 