import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components'

export const PartnerVenuesLandingWrapper = styled.div`
width: 100%;
display:flex;

@media (max-width: 451px) {
    flex-direction: column;
}
`

export const TextContainer = styled.div`
width: 39%;
padding-left: 1.25rem;
@media (max-width: 451px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
}
`
export const FeatureImage = styled(GatsbyImage)`
min-width: 100%;
aspect-ratio: 3/2;
  
`;