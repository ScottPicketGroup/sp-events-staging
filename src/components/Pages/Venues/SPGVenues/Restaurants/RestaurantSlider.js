import React from "react"
import { Heading1, Heading2, Heading3 } from "../../../../StyledComponents/typography.css"
import { FullImageContainer, ItemImgLink} from "../OurFamily.css"

import { Card, Container, ImageContainer } from "./RestaurantSlider.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SPGRestaurantListRenderer from "../../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer";
import { useSwipeable } from "react-swipeable";
import ArrowIcon from "../../../../../images/ArrowIcon";
const RestaurantSlider = ({ restaurantList }) => {
    const [active, setActive] = React.useState(0)


    const handlers = useSwipeable({
        onSwipedLeft: () => active >= 0 && active < restaurantList.length - 1 ? setActive(active + 1) : null,
        onSwipedRight: () => active > 0 && active < restaurantList.length  ? setActive(active - 1) : null
      
      })
    console.log('active', active, restaurantList)

    return (

        <Container {...handlers}>
            <Heading1
               
            >
                Our Family
            </Heading1>
            <ImageContainer>
                {restaurantList.map((r, i) => (
                    <Card
                        key={i}
                        i={i}
                        active={active}
                    >
                        <ItemImgLink
                            href="http://www.chancerylane.com.au "
                            target="_blank"
                            link={true}
                        >
                            <FullImageContainer>
                                <GatsbyImage image={getImage(r.restaurantMedia[0])} style={{aspectRatio: `3/2`}} />
                            </FullImageContainer>
                            <Heading2 marginTop="sm">{r.restaurantName}</Heading2>
                            <Heading3 marginTop="xs">{r.location} </Heading3>
                            <SPGRestaurantListRenderer node={r.restaurantDescription} />
                            <Heading3 marginTop="sm">Visit <ArrowIcon /></Heading3>
                        </ItemImgLink>
                    </Card>
                ))}
            </ImageContainer>

        </Container>

    )
}

export default RestaurantSlider

