
import styled from 'styled-components'
import { GatsbyImage} from "gatsby-plugin-image"

export const HeroImage = styled(GatsbyImage)`
aspect-ratio: 16/9;
width: 100%;
@media (max-width: 451px) {
    margin-bottom: 3.5rem;
    aspect-ratio: 9/16;
}
`