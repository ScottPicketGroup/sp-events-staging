import React from 'react'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1, Heading2, Heading3, BC1, BC, BC3, SampleLink } from "../../StyledComponents/typography.css"
import { Link } from 'gatsby'


const Renderer = ({ node }) => {





    const options = {
        // renderMark: {
        //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        //   },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.PARAGRAPH]: (node, children) => <BC1 marginBottom="sm">{children}</BC1>

        },
    }

    return (
        <>

            {renderRichText(node, options)}
        </>
    )
}

export default Renderer
