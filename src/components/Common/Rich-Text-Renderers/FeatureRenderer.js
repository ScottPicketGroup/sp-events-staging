import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1, Heading2, Heading3,BC3} from "../../StyledComponents/typography.css"
import styled from 'styled-components';
const FeatureRenderer = ({ node }) => {

    const options = {
        // renderMark: {
        //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        //   },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.PARAGRAPH]: (node, children) => <BC3 marginBottom="sm" marginTop="sm"> {children}</BC3>},
    }

    return (
        <RendererWrapper
        
        >

            {renderRichText(node, options)}
        </RendererWrapper>
    )
}

export default FeatureRenderer

export const RendererWrapper = styled.div`
  @media (max-width: 451px) {
    margin-bottom: 2rem;
  }
`;