import React, { useRef } from "react"

import { graphql } from "gatsby"

import Hero from "../components/Common/Hero/HeroContentfulDynamic"
import Layout from "../components/layout"
import Seo from "../components/seo"

// page components



import {
  PageContainer,
  PageWrapper,
} from "../components/StyledComponents/containers.css"

import useWatchScroll from "../components/Common/Hooks/useWatchScroll"
import useRefAttributes from "../components/Common/Hooks/useRefAttributes"
import useWindowSize from "../components/Common/Hooks/useWindowDimensions"
import Intro from "../components/Dynamic/Intro/Intro"
import EventTypes from "../components/Dynamic/EventTypes/EventTypes"
import Feature from "../components/Dynamic/Feature/Feature"
import FullScreenStaticImage from "../components/Dynamic/FullScreenStaticImage/FullScreenStaticImage"
import { LeftMenu } from "../components/Dynamic/LeftMenu/LeftMenu"
import Enquire from "../components/Dynamic/Enquire/Enquire"
const About = ({ data }) => {
  const { heroElement, pageElements } =
    data.contentful2AboutUsPage
  const itemsRef = useRef([])

  const { scrollY } = useWatchScroll()
  const { items, heights } = useRefAttributes(itemsRef)
  const { width } = useWindowSize()
  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

  return (
    <Layout>
      <Seo title="About Scott Pickett Events" />
      <Hero data={heroElement} />
      <PageWrapper>
        <LeftMenu pageElements={pageElements}  executeScroll={executeScroll} scrollY={scrollY} items={items} heights={heights}/>
        <PageContainer>
          {pageElements.map((element, i) => (
            <div ref={el => (itemsRef.current[i] = el)}>
              {element.internal.type === "ContentfulIntroElement" ? (
                <Intro data={element} />
              ) : element.internal.type === "ContentfulEventTypesSection" ? (
                <EventTypes data={element} />
              ) : element.internal.type === "ContentfulImageFullWidthStatic" ? (
                <FullScreenStaticImage data={element}/>
              ) : element.internal.type === "ContentfulFeatureElement" ? (
                <Feature data={element} />
              ) :   element.internal.type === "ContentfulEnquireSection" ? (
                <Enquire data={element} />
              ) :
              
              null}
            </div>
          ))}
         
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default About

export const query = graphql`
query DynamicAboutQuery {
  contentful2AboutUsPage(id: {eq: "60ef7c3a-74ae-55ff-88fd-f9e30af04e5a"}) {
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
      ... on ContentfulEventTypesSection {
              id
              internal {
                type
              }
              greyBackground
              heading
              leftMenuHeading
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
              }
            }
      ... on ContentfulEnquireSection {
        id
        internal {
          type
        }
        enquireHeading
        leftMenuHeading
        enquireDescription {
          raw
        }
        marginBottom
        marginTop
      }
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
        bottomMargin
        topMargin
      }
    }
  }
}

`
