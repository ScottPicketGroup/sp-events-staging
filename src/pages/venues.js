import React, { useRef, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/HeroContentful"
import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
} from "../components/StyledComponents/containers.css"

import Intro from "../components/Pages/Venues/Intro"

import SPGRestaurants from "../components/Pages/Venues/SPGVenues/SPGRestaurants"
import FeatureVenue from "../components/Pages/Venues/FeatureVenue/FeatureVenue"
import PartnerVenues from "../components/Pages/Venues/PartnerVenues/PartnerVenues"
import PrivateVenue from "../components/Pages/Venues/PrivateVenue/PrivateVenue"
import Enquire from "../components/Pages/Landing/Enquire/Enquire"

const VenuesPage = ({ data }) => {



  const [scrollY, setScrollY] = useState(0)

  const logit = () => setScrollY(window.pageYOffset)

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  const menuItems = ["Venues", "SPG Restaurants", "Sutton Grange", "Partner Venues", "SP Private Venue", "Enquiries"]

  const [items] = React.useState([])
  const [heights] = React.useState([])

  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current.forEach(i => {
      const meh = i.getBoundingClientRect()

      items.push(meh.top)
    })
    itemsRef.current.forEach(i => {
      const scrollTop = i.scrollHeight
      heights.push(scrollTop)
    })
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [heights, items])

  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

 // const { heroMedia, pageTitle, introduction, featuredPartnerVenue, partnerVenuesRestaurantList, privateVenueSection } = data.allContentfulVenuesPageContent.edges[0].node

  return (
    <Layout>
      <Seo title="Venues" />
      {/* <Hero image={heroMedia} />

      <PageWrapper>
        <MenuContainer>
          {items &&
            itemsRef.current &&
            menuItems.map((menuItem, i) => (
              <MenuItem
                key={i}
                onClick={() => executeScroll(i)}
                sH={items[i]}
                sT={heights[i]}
                scrollY={scrollY}
              >
                {menuItem}
              </MenuItem>
            ))}
        </MenuContainer> */}

        {/* <PageContainer > */}
          {/* <div ref={el => (itemsRef.current[0] = el)}>
            <Intro pageTitle={pageTitle} introduction={introduction} />
          </div>
          <div ref={el => (itemsRef.current[1] = el)}>
            <SPGRestaurants restaurantList={data.allContentfulVenuesPageContent.edges[0].node.spgRestaurants} />

          </div>
          <div ref={el => (itemsRef.current[2] = el)}>
            <FeatureVenue featuredPartnerVenue={featuredPartnerVenue} />
          </div>
          <div ref={el => (itemsRef.current[3] = el)}>
            <PartnerVenues restaurantList={partnerVenuesRestaurantList} />
          </div>
          <div ref={el => (itemsRef.current[4] = el)}>
            <PrivateVenue privateVenueSection={privateVenueSection} />
          </div>
          <div ref={el => (itemsRef.current[5] = el)}>
            <Enquire />
          </div> */}
        {/* </PageContainer>
      </PageWrapper> */}
    </Layout>
  )
}

export default VenuesPage


export const query = graphql`
query Venues {
    allContentfulVenuesPageContent {
      edges {
        node {
          heroMedia {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            title
          }
          introduction {
            raw
          }
          pageTitle
          spgRestaurants {
            restaurantName
            restaurantDescription {
              raw
            }
            location
            restaurantMedia {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
          }
          featuredPartnerVenue {
            greyBackground
            featuredRestaurant {
              restaurantDescription {
                raw
              }
              restaurantMedia {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                title
              }
              location
              subHeading
              restaurantName
            }
          }
          partnerVenuesRestaurantList {
            location
            restaurantDescription {
              raw
            }
            restaurantMedia {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              title
            }
          }
          enquireSection {
            enquireDescription {
              raw
            }
            enquireHeading
          }
          privateVenueSection {
            subHeading
            sectionHeading
            privateVenue {
              heroMedia {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                title
              }
              introduction {
                raw
              }
            }
          }
        }
      }
    }
  }
`