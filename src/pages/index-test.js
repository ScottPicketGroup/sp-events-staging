import React, { useRef } from "react"

import { graphql } from "gatsby"

import Hero from "../components/Common/Hero/HeroContentfulDynamic"
import Layout from "../components/layout"
import Seo from "../components/seo"

// page components
import PartiesAndEvents from "../components/Menu/Parties&Events/PartiesAndEvents"
import Enquire from "../components/Pages/Landing/Enquire/Enquire"
import FollowUsOnSocial from "../components/Pages/Landing/FollowOnSocial/FollowUsOnSocial"
import PartnerVenues from "../components/Pages/Landing/PartnerVenues/PartnerVenues"
import GallerySlider from "../components/Common/GallerySlider/GallerySlider"

import {
  MenuContainer,
  PageContainer,
  PageWrapper,
} from "../components/StyledComponents/containers.css"

import useWatchScroll from "../components/Common/Hooks/useWatchScroll"
import useRefAttributes from "../components/Common/Hooks/useRefAttributes"
import useWindowSize from "../components/Common/Hooks/useWindowDimensions"
import Intro from "../components/Dynamic/Intro/Intro"
import EventTypes from "../components/Dynamic/EventTypes/EventTypes"
import Feature from "../components/Dynamic/Feature/Feature"
const Indextest = ({ data }) => {
  const { heroElement, pageElements } =
    data.allContentfulLandingPageDynamic.edges[0].node
  const itemsRef = useRef([])

  const { scrollY } = useWatchScroll()
  const { items, heights } = useRefAttributes(itemsRef)
  const { width } = useWindowSize()
  // console.log('pageElements', pageElements[0])
  return (
    <Layout>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero data={heroElement} />
      <PageWrapper>
        <MenuContainer />
        <PageContainer>
          {pageElements.map((element, i) => (
            <div ref={el => (itemsRef.current[i] = el)}>
              {element.internal.type === "ContentfulIntroElement" ? (
                <Intro data={element} />
              ) : element.internal.type === "ContentfulEventTypesSection" ? (
                <EventTypes data={element} />
              ) : element.internal.type === "ContentfulImageFullWidthStatic" ? (
                <>ContentfulImageFullWidthStatic</>
              ) : element.internal.type === "ContentfulFeatureElement" ? (
                <Feature data={element} />
              ) : null}
            </div>
          ))}
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default Indextest

export const query = graphql`
  query DynamicLandingQuery {
    allContentfulLandingPageDynamic {
      edges {
        node {
          pageElements {
            ... on ContentfulEventTypesSection {
              id
              internal {
                type
              }
              greyBackground
              heading
              eventTypes {
                pageName
                subheadingForGrid
                heroElement {
                  heroImage {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                  heroText {
                    raw
                  }
                }
                introSection {
                  greyBackground
                  heading
                  introHalfWidth
                  introduction {
                    raw
                  }
                  linkUrl
                  linkLabel
                }
              }
            }
            ... on ContentfulFeatureElement {
              id
              internal {
                type
              }
              heading
              isGreyBackground
              image {
                title
                gatsbyImageData(placeholder: BLURRED)
              }
              introduction {
                raw
              }
              linkLabel
              linkUrl
              secondSubHeading
              subHeading
            }
            ... on ContentfulImageFullWidthStatic {
              id
              internal {
                type
              }
              image {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
                gatsbyImageData(placeholder: BLURRED)
                title
              }
            }
            ... on ContentfulIntroElement {
              id
              internal {
                type
              }
              greyBackground
              heading
              introHalfWidth
              introduction {
                raw
              }
              linkLabel
              linkUrl
            }
          }
          heroElement {
            heroImage {
              gatsbyImageData(placeholder: BLURRED)
              title
            }
            heroText {
              raw
            }
          }
        }
      }
    }
  }
`
