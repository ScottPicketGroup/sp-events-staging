import React from 'react'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1, Heading2, Heading3, BC1, BC, BC3, SampleLink } from "../../StyledComponents/typography.css"
import { Link } from 'gatsby'
import { Button } from '../global-styles/GlobalStyles.css'

const Renderer = ({ node }) => {



    const website_url = 'https://'

    const options = {
        // renderMark: {
        //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        //   },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.PARAGRAPH]: (node, children) => <BC1 marginBottom="sm">{children}</BC1>,
            [INLINES.HYPERLINK]: ({ data }, children) => (
                <Button marginTop="md">
                <a
                style={{fontFamily: `inherit`}}
                    href={
                        `${data.uri.startsWith(website_url) ? data.uri : website_url + data.uri}`}
                    target="_blanc"
                    rel={`${data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
                >{children}</a></Button>)

        },
    }

    return (
        <>

            {renderRichText(node, options)}
        </>
    )
}

export default Renderer
