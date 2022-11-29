import React, { useRef, useState, useEffect } from "react"

import { graphql } from "gatsby"

import Hero from "../components/Common/Hero/HeroContentfulDynamic"
import Layout from "../components/layout"
import Seo from "../components/seo"

// page components

import FollowUsOnSocial from "../components/Pages/Landing/FollowOnSocial/FollowUsOnSocial"

import {
  PageContainer,
  PageWrapper,
  SectionContainer,
  SectionWrapper,
} from "../components/StyledComponents/containers.css"

import useWatchScroll from "../components/Common/Hooks/useWatchScroll"
import useRefAttributes from "../components/Common/Hooks/useRefAttributes"
import useWindowSize from "../components/Common/Hooks/useWindowDimensions"
import Intro from "../components/Dynamic/Intro/Intro"
import EventTypes from "../components/Dynamic/EventTypes/EventTypes"
import Feature from "../components/Dynamic/Feature/Feature"
import FullScreenStaticImage from "../components/Dynamic/FullScreenStaticImage/FullScreenStaticImage"
import { LeftMenu } from "../components/Dynamic/LeftMenu/LeftMenu"
import SampleMenuByVenue from "../components/Dynamic/SampleMenuByVenue/SampleMenuByVenue"
import Venue from "../components/Dynamic/SampleMenuByVenue/Venue"
const Indextest = ({ data }) => {
  const { heroElement, pageElements } = data.contentful4SampleMenus
  const itemsRef = useRef([])
  const { scrollY } = useWatchScroll()
  const { items, heights } = useRefAttributes(itemsRef)
  const { width } = useWindowSize()
  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

  const [pageSections, setPageSections] = useState([])

  useEffect(() => {
    let sectionsToSet = []
    pageElements.map((element, i) =>
      element.restaurants
        ? element.restaurants.map(restaurant =>
            sectionsToSet.push({
              internal: { type: "ContentfulSampleMenuCollectionByRestaurant" },
              restaurant,
            })
          )
        : sectionsToSet.push(element)
    )
    setPageSections(sectionsToSet)
  }, [pageElements])




  return (
    <Layout>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero data={heroElement} />
      <PageWrapper>
        <LeftMenu
          pageElements={pageElements}
          executeScroll={executeScroll}
          scrollY={scrollY}
          items={items}
          heights={heights}
        />
        <PageContainer>
          {pageSections.map((element, i) => (
            <>
              {element.internal.type === "ContentfulIntroElement" ? (
                <div ref={el => (itemsRef.current[i] = el)}>
                  <Intro data={element} />{" "}
                </div>
              ) : element.internal.type ===
                "ContentfulSampleMenuCollectionByRestaurant" ? (
                <SectionContainer
                  paddingTop="lg"
                  isGreyBackground={element.greyBackground}
                  width="100vw"
                  paddingBottom="lg"
                >
                  <SectionWrapper width="73.5%">
                    <div ref={el => (itemsRef.current[i] = el)}>
                      <Venue data={element.restaurant} key={i} />
                    </div>
                  </SectionWrapper>
                </SectionContainer>
              ) : element.internal.type === "ContentfulImageFullWidthStatic" ? (
                <div ref={el => (itemsRef.current[i] = el)}>
                  {" "}
                  <FullScreenStaticImage data={element} />{" "}
                </div>
              ) : element.internal.type === "ContentfulFeatureElement" ? (
                <div ref={el => (itemsRef.current[i] = el)}>
                  {" "}
                  <Feature data={element} />{" "}
                </div>
              ) : null}
            </>
          ))}
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default Indextest

export const query = graphql`
  query SampleMenuPageQuery {
    contentful4SampleMenus(id: { eq: "b102e79c-e698-5b8b-842c-101d04874dfa" }) {
      id
      heroElement {
        heroImage {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
        heroText {
          raw
        }
      }
      pageElements {
        ... on ContentfulIntroElement {
          id
          leftMenuHeading
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
        ... on ContentfulSampleMenuCollectionByRestaurant {
          id
          internal {
            type
          }
          restaurants {
            venueName
            venueImage {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              title
            }
            subheading
            description {
              raw
            }
            accordionItemsCollection {
              heading
              menuSectionsCollection {
                sectionName
                menuSectionItems {
                  menuItem
                }
              }
              accordionImage {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
