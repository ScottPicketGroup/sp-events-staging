import React, { useRef } from "react"

import { graphql } from "gatsby"

import Hero from "../components/Common/Hero/HeroContentfulDynamic"
import Layout from "../components/layout"
import Seo from "../components/seo"

// page components

import FollowUsOnSocial from "../components/Pages/Landing/FollowOnSocial/FollowUsOnSocial"


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
import Enquire from "../components/Dynamic/Enquire/Enquire"
import FullScreenStaticImage from "../components/Dynamic/FullScreenStaticImage/FullScreenStaticImage"
import { LeftMenu } from "../components/Dynamic/LeftMenu/LeftMenu"
import DynamicSlider from "../components/Dynamic/GallerySlider/GallerySlider"
import SubEventTypes from "../components/Dynamic/SubEventTypes/SubEventTypes"

const DynamicTemplate = ({ pageContext }) => {
  const { heroElement, pageElements } =
  pageContext.eventData
  const itemsRef = useRef([])
  const { scrollY } = useWatchScroll()
  const { items, heights } = useRefAttributes(itemsRef)
  const { width } = useWindowSize()
  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

  return (
    <Layout>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero data={heroElement} />
      <PageWrapper>
        <LeftMenu pageElements={pageElements}  executeScroll={executeScroll} scrollY={scrollY} items={items} heights={heights}/> 
        <PageContainer>
         {pageContext.eventData.pageElements.map((element, i) => (
            <div ref={el => (itemsRef.current[i] = el)}>
              { element.internal.type === "ContentfulIntroElement" ? (
                <Intro data={element} />
              ) : element.internal.type === "ContentfulEventTypesSection" ? (
                <EventTypes data={element} />
              ) : element.internal.type === "ContentfulEventTypeOptionsCollection" ? (
                <SubEventTypes data={element} />
              ) : element.internal.type === "ContentfulImageFullWidthStatic" ? (
                <FullScreenStaticImage data={element}/>
              ) : element.internal.type === "ContentfulFeatureElement" ? (
                <Feature data={element} />
              )  : element.internal.type === "ContentfulImageGallery" ? (
                <DynamicSlider data={element} />
              )  : element.internal.type === "ContentfulEnquireSection" ? (
                <Enquire data={element} />
              )  :
              null}
            </div>
          ))}
         
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default DynamicTemplate

