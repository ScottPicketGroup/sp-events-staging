import React, { useRef, useEffect, useState } from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/HeroContentful"
import Intro from "../components/Pages/Venues/Intro"
import SPGRestaurants from "../components/Pages/Venues/SPGVenues/SPGRestaurants"
import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
} from "../components/StyledComponents/containers.css"

import PartiesAndEvents from "../components/Menu/Parties&Events/PartiesAndEvents"
import Enquire from "../components/Pages/Landing/Enquire/Enquire"
import FollowUsOnSocial from "../components/Pages/Landing/FollowOnSocial/FollowUsOnSocial"
import PartnerVenues from "../components/Pages/Landing/PartnerVenues/PartnerVenues"
import GallerySlider from "../components/Common/GallerySlider/GallerySlider"
import useWatchScroll from "../components/Common/Hooks/useWatchScroll"
import useRefAttributes from "../components/Common/Hooks/useRefAttributes"
const IndexPage = ({data}) => {
  const itemsRef = useRef([])
  
const {scrollY} = useWatchScroll()
const {items, heights} = useRefAttributes(itemsRef)

  const menuItems = [
    "Introduction",
    "Gallery",
    "Our Family",
    "Parties & Events",
    "Partner Venues",
    "Enquiries",
    // "Instagram",
  ]

  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

const {heroMedia, pageTitle, introduction, partiesEvents, partnerVenuesSection, gallery} = data.allContentfulLandingPageContent.edges[0].node
  return (
    <Layout>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero image={heroMedia} />

      <PageWrapper>
        <MenuContainer>
          {items &&
            menuItems.map((menuItem, i) => (
              <MenuItem
                key={i}
                onClick={() => executeScroll(i)}
                sH={items[i]}
                sT={heights[i]}
                scrollY={scrollY}
              >
                {menuItem}
                {console.log(items[i], heights[i])}
              </MenuItem>
            ))}
        </MenuContainer>

        <PageContainer>
       <div ref={el => (itemsRef.current[0] = el)}>
       <Intro pageTitle={pageTitle} introduction={introduction} />
          </div>  
          <div ref={el => (itemsRef.current[1] = el)}>
        <GallerySlider images={gallery} />
          </div> 
          <div ref={el => (itemsRef.current[2] = el)}>
           <SPGRestaurants restaurantList={data.allContentfulLandingPageContent.edges[0].node.ourFamily} title="SPG Restaurants"/>
          </div>
          <div ref={el => (itemsRef.current[3] = el)}>
            <PartiesAndEvents partiesEvents={partiesEvents}/>
          </div>
          <div ref={el => (itemsRef.current[4] = el)}>
        <PartnerVenues partnerVenuesSection={partnerVenuesSection}/>
          </div>
          <div ref={el => (itemsRef.current[5] = el)}>
            <Enquire />
          </div> 
          {/* <div ref={el => (itemsRef.current[6] = el)}>
            <FollowUsOnSocial />
          </div> */}
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulLandingPageContent {
    edges {
      node {
        introduction {
          raw
        }
        heroMedia {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          title
        }
        pageHeading
        enquireSection {
          enquireDescription {
            raw
          }
          enquireHeading
        }
        gallery {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          title
        }
        ourFamily {
          location
          restaurantName
          restaurantDescription {
            raw
          }
          restaurantMedia {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        partiesEvents {
          id
          introduction {
            raw
          }
          heroMedia {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            title
          }
          subHeadingForLandingPage
          pageName
        }
        partnerVenuesSection {
          heading
          greyBackground
          introduction {
            raw
          }
          partnerVenuesImage {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            title
          }
          subHeading
        }
      }
    }
  }
}

`