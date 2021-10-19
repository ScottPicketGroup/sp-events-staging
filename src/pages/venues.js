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
  SectionContainer,
} from "../components/StyledComponents/containers.css"
import EnquiriesSummary from "../components/Pages/Enquiries/EnquiriesSummary"
import GeneralEnquiries from "../components/Pages/Enquiries/GeneralEnquiries"
import EnquireForm from "../components/Common/EnquireForm"
import { Heading1 } from "../components/StyledComponents/typography.css"

const VenuesPage = ({data}) => {


 
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

const {heroMedia} = data.allContentfulVenuesPageContent.edges[0].node

  return (
    <Layout>
      <Seo title="FAQs" />
       <Hero image={heroMedia} />

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
        </MenuContainer>

        <PageContainer alignItemStart>
          <div ref={el => (itemsRef.current[0] = el)}>
            <EnquiriesSummary />
          </div>
          <div ref={el => (itemsRef.current[1] = el)}>
            <GeneralEnquiries />
          </div>
          <div ref={el => (itemsRef.current[2] = el)}>
            <SectionContainer marginBottom="sm">
              <Heading1 marginBottom="lg">Event Enquiries</Heading1>
            </SectionContainer>
            <EnquireForm />
          </div>
        </PageContainer>
      </PageWrapper> 
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