import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  BC3,
  Heading2,
  Heading3,
} from "../../StyledComponents/typography.css"
import {
  FullImageContainer,
  Grid,
  Item,
  ItemImgLink,
} from "../../StyledComponents/containers.css"

import {partiesAndEvents} from './PartiesAndEventsArray'
import ArrowIcon from "../../../images/ArrowIcon"

const PartiesAndEventsGrid = () => {
  return (
    <Grid cols={2} colsMob={1} full>
      {partiesAndEvents &&
        partiesAndEvents.map((item, i) => (
          <Item
          key={i}
          >
            <ItemImgLink
              href="http://www.chancerylane.com.au "
              target="_blank"
              link={true}
            >
              <FullImageContainer>
                <StaticImage
                  placeholder="blurred"
                  src="../../../../../images/OurFamily/estelle.png"
                  alt="Chancery Lane"
                 
                />
              </FullImageContainer>
              <Heading2 marginTop="sm">{item.title}</Heading2>
              <Heading3 marginTop="xs">{item.subTitle}</Heading3>
              <BC3 marginTop="sm">
                {item.description}
              </BC3>
              <Heading3 marginTop="sm">Discover More    &nbsp;<ArrowIcon/></Heading3>
            </ItemImgLink>
          </Item>
        ))}
    </Grid>
  )
}

export default PartiesAndEventsGrid