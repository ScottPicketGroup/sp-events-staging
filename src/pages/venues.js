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
import VenueGrid from "../components/Dynamic/VenueGridSPG/VenueGrid"
const Venues = ({ data }) => {
  const { heroElement, pageElements } = data.contentful3EventSpacesPage
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
        <LeftMenu
          pageElements={pageElements}
          executeScroll={executeScroll}
          scrollY={scrollY}
          items={items}
          heights={heights}
        />
        <PageContainer>
          {pageElements.map((element, i) => (
            <div ref={el => (itemsRef.current[i] = el)}>
              {element.internal.type === "ContentfulIntroElement" ? (
                <Intro data={element} />
              ) : element.internal.type === "ContentfulEventTypesSection" ? (
                <EventTypes data={element} />
              ) : element.internal.type === "ContentfulImageFullWidthStatic" ? (
                <FullScreenStaticImage data={element} />
              ) : element.internal.type === "ContentfulFeatureElement" ? (
                <Feature data={element} />
              ) 
              :   element.internal.type === "ContentfulRestaurantsCollectionElement" ? (
                <VenueGrid data={element} />
              )
              :   element.internal.type === "ContentfulEnquireSection" ? (
                <Enquire data={element} />
              )
              : element.internal.type === "undefined" ? null 
              : null}
            </div>
          ))}
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default Venues

export const query = graphql`
  query DynamicVenuesQuery {
    contentful3EventSpacesPage(
      id: { eq: "1cbca9f2-557a-5c36-ab07-b811da7259cd" }
    ) {
      pageElements {
  
        ... on ContentfulRestaurantsCollectionElement {
          id
          leftMenuHeading
          internal {
            type
          }
          greyBackground
          heading
          venues {
            ... on ContentfulRestaurantPartnerVenues {

              id
              internal {
                type
              }
              restaurantDescription {
                raw
              }
              location
              restaurantName
              restaurantMedia {
                gatsbyImageData(placeholder: BLURRED)
              }
              subHeading
            }
            ... on ContentfulRestaurantSpe {
             
              id
              internal {
                type
              }
              restaurantName
              restaurantUrl
              restaurantMedia {
                gatsbyImageData
              }
              restaurantDescription {
                raw
              }
              functionAreas {
                spaceName
                seatingCapacity
                standingCapacity
                image {
                  gatsbyImageData(placeholder: BLURRED)
                }
                regionCuisineStyle
              }
            }
          }
        }
        ... on ContentfulFeatureElement {
          id
          leftMenuHeading
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
        ... on ContentfulImageFullWidthStatic {
          id
          internal {
            type
          }
          image {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
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
`

// import React, { useRef, useEffect, useState } from "react"
// import { graphql} from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import Hero from "../components/Common/Hero/HeroContentful"
// import {
//   PageContainer,
//   PageWrapper,
//   MenuContainer,
//   MenuItem,
// } from "../components/StyledComponents/containers.css"

// import Intro from "../components/Pages/Venues/Intro"

// import SPGRestaurants from "../components/Pages/Venues/SPGVenues/SPGRestaurants"
// import FeatureVenue from "../components/Pages/Venues/FeatureVenue/FeatureVenue"
// import PartnerVenues from "../components/Pages/Venues/PartnerVenues/PartnerVenues"
// import PrivateVenue from "../components/Pages/Venues/PrivateVenue/PrivateVenue"
// import Enquire from "../components/Pages/Landing/Enquire/Enquire"

// const VenuesPage = ({ data }) => {

//   const [scrollY, setScrollY] = useState(0)

//   const logit = () => setScrollY(window.pageYOffset)

//   useEffect(() => {
//     const watchScroll = () => {
//       window.addEventListener("scroll", logit)
//     }
//     watchScroll()
//     return () => {
//       window.removeEventListener("scroll", logit)
//     }
//   })

//   const menuItems = ["Venues", "SPG Restaurants", "Sutton Grange", "Partner Venues", "SP Private Venue", "Enquiries"]

//   const [items] = React.useState([])
//   const [heights] = React.useState([])

//   const itemsRef = useRef([])

//   useEffect(() => {
//     itemsRef.current.forEach(i => {
//       const meh = i.getBoundingClientRect()

//       items.push(meh.top)
//     })
//     itemsRef.current.forEach(i => {
//       const scrollTop = i.scrollHeight
//       heights.push(scrollTop)
//     })
//     itemsRef.current = itemsRef.current.slice(0, items.length)
//   }, [heights, items])

//   const executeScroll = el =>
//     itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

//  const { heroMedia, pageTitle, introduction, featuredPartnerVenue, partnerVenuesRestaurantList, privateVenueSection } = data.allContentfulVenuesPageContent.edges[0].node

//   return (
//     <Layout>
//       <Seo title="Venues" />
//       <Hero image={heroMedia} />

//       <PageWrapper>
//         <MenuContainer>
//           {items &&
//             itemsRef.current &&
//             menuItems.map((menuItem, i) => (
//               <MenuItem
//                 key={i}
//                 onClick={() => executeScroll(i)}
//                 sH={items[i]}
//                 sT={heights[i]}
//                 scrollY={scrollY}
//               >
//                 {menuItem}
//               </MenuItem>
//             ))}
//         </MenuContainer>

//         <PageContainer >
//            <div ref={el => (itemsRef.current[0] = el)}>
//             <Intro pageTitle={pageTitle} introduction={introduction} />
//           </div>
//           <div ref={el => (itemsRef.current[1] = el)}>
//             <SPGRestaurants restaurantList={data.allContentfulVenuesPageContent.edges[0].node.spgRestaurants} title="SPG Restaurants"/>

//           </div>
//           <div ref={el => (itemsRef.current[2] = el)}>
//             <FeatureVenue featuredPartnerVenue={featuredPartnerVenue} />
//           </div>
//           <div ref={el => (itemsRef.current[3] = el)}>
//             <PartnerVenues restaurantList={partnerVenuesRestaurantList} />
//           </div>
//           <div ref={el => (itemsRef.current[4] = el)}>
//             <PrivateVenue privateVenueSection={privateVenueSection} />
//           </div>
//           <div ref={el => (itemsRef.current[5] = el)}>
//             <Enquire />
//           </div>
//        </PageContainer>
//       </PageWrapper>
//     </Layout>
//   )
// }

// export default VenuesPage

// export const query = graphql`
// query Venues {
//     allContentfulVenuesPageContent {
//       edges {
//         node {
//           heroMedia {
//             gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//             title
//           }
//           introduction {
//             raw
//           }
//           pageTitle
//           spgRestaurants {
//             restaurantName
//             restaurantDescription {
//               raw
//             }
//             location
//             restaurantMedia {
//                 gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//               }
//           }
//           featuredPartnerVenue {
//             greyBackground
//             featuredRestaurant {
//               restaurantDescription {
//                 raw
//               }
//               restaurantMedia {
//                 gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
//                 title
//               }
//               location
//               subHeading
//               restaurantName
//             }
//           }
//           partnerVenuesRestaurantList {
//             restaurantName
//             location
//             restaurantDescription {
//               raw
//             }
//             restaurantMedia {
//               gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//               title
//             }
//           }
//           enquireSection {
//             enquireDescription {
//               raw
//             }
//             enquireHeading
//           }
//           privateVenueSection {
//             subHeading
//             sectionHeading
//             privateVenue {
//               heroMedia {
//                 gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//                 title
//               }
//               introduction {
//                 raw
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
