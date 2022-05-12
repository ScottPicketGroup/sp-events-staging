
import styled from 'styled-components'
import { GatsbyImage} from "gatsby-plugin-image"

export const HeroImage = styled(GatsbyImage)`
aspect-ratio: 16/9;
margin-bottom: 4.25rem;
@media (max-width: 451px) {
    margin-bottom: 2.5rem;
    aspect-ratio: 9/16;
}
`