import React, { useRef, useState, useEffect } from "react"

import { graphql } from "gatsby"
import {useLocation} from '@reach/router'
import Hero from "../components/Common/Hero/HeroContentfulDynamic"
import Layout from "../components/layout"
import Seo from "../components/seo"



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
import Feature from "../components/Dynamic/Feature/Feature"
import FullScreenStaticImage from "../components/Dynamic/FullScreenStaticImage/FullScreenStaticImage"
import { LeftMenu } from "../components/Dynamic/LeftMenu/LeftMenu"
import FAQSection from "../components/Pages/FAQ/FAQSection"
const Indextest = ({ data }) => {
  const { heroElement, pageElements } = data.contentful5FaQsPage
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
      element.faqSectionCollection
        ? element.faqSectionCollection.map(faqSectionCollection =>
            sectionsToSet.push({
              internal: { type: "ContentfulFaqSectionCollection" },
              faqSectionCollection,
            })
          )
        : sectionsToSet.push(element)
    )
    setPageSections(sectionsToSet)
  }, [pageElements])
const page = useLocation().pathname.replace("/", '')

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
        <PageContainer page={page}>
          {pageSections.map((element, i) => (
            <>
              {element.internal.type === "ContentfulIntroElement" ? (
                <div ref={el => (itemsRef.current[i] = el)}>
                  <Intro data={element} />{" "}
                </div>
              ) : element.internal.type ===
                "ContentfulFaqSectionCollection" ? (
                <SectionContainer
                  paddingTop="lg"
                  isGreyBackground={element.greyBackground}
                  width="100vw"
                  paddingBottom="lg"
                >
                  <SectionWrapper width="73.5%">
                    <div ref={el => (itemsRef.current[i] = el)}>
                    <FAQSection  data={element} />
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
  query FAQsQuery {
    contentful5FaQsPage(id: { eq: "c63e6b30-0cfe-5c89-9dc7-eff295f4be2b" }) {
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
        ... on ContentfulFaqSectionCollection {
          id
          internal {
            type
          }
          faqSectionCollection {
            sectionHeading
            leftMenuHeading
            faqItems {
              subHeading
              question
              answer {
                raw
              }
            }
          }
        }
      }
    }
  }
`
