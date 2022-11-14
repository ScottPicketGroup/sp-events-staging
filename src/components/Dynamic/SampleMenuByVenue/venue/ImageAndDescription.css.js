import styled from "styled-components"

export const PartnerVenuesLandingWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  .gatsby-image-wrapper {
    width: 75%;
  }
  @media (max-width: 451px) {
    flex-direction: column;

    .gatsby-image-wrapper {
      width: 100%;
      margin-bottom: 1rem;
    }
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
