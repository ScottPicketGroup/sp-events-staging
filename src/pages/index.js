// import React, { useRef, useState, useEffect, useCallback } from "react"

// import { graphql } from "gatsby"

// import Hero from "../components/Common/Hero/HeroContentfulDynamic"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

// // page components

// import FollowUsOnSocial from "../components/Pages/Landing/FollowOnSocial/FollowUsOnSocial"

// import {
//   PageContainer,
//   PageWrapper,
// } from "../components/StyledComponents/containers.css"

// import useWatchScroll from "../components/Common/Hooks/useWatchScroll"
// import useRefAttributes from "../components/Common/Hooks/useRefAttributes"
// import useWindowSize from "../components/Common/Hooks/useWindowDimensions"
// import Intro from "../components/Dynamic/Intro/Intro"
// import EventTypes from "../components/Dynamic/EventTypes/EventTypes"
// import Feature from "../components/Dynamic/Feature/Feature"
// import FullScreenStaticImage from "../components/Dynamic/FullScreenStaticImage/FullScreenStaticImage"
// import { LeftMenu } from "../components/Dynamic/LeftMenu/LeftMenu"
// const Indextest = ({ data }) => {
//   const { heroElement, pageElements } = data.contentful1LandingPageDynamic
//   const itemsRef = useRef([])



//   const { items, heights } = useRefAttributes(itemsRef)

//   const executeScroll = el =>
//     itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

 

//   return (
//     <Layout>
//       <Seo title="Welcome to Scott Pickett Events" />
//       <Hero data={heroElement} />
//       <PageWrapper>
//         <LeftMenu
//           pageElements={pageElements}
//           executeScroll={executeScroll}
         
//           items={items}
//           heights={heights}
//           itemsRef={itemsRef}
//         />
//         <PageContainer>
//           {pageElements.map((element, i) => (
//             <div ref={el => (itemsRef.current[i] = el)}>
//               {element.internal.type === "ContentfulIntroElement" ? (
//                 <Intro data={element} />
//               ) : element.internal.type === "ContentfulEventTypesSection" ? (
//                 <EventTypes data={element} />
//               ) : element.internal.type === "ContentfulImageFullWidthStatic" ? (
//                 <FullScreenStaticImage data={element} />
//               ) : element.internal.type === "ContentfulFeatureElement" ? (
//                 <Feature data={element} />
//               ) : element.internal.type === "ContentfulInstaSliderTemporary" ? (
//                 <FollowUsOnSocial data={element} />
//               ) : null}
//             </div>
//           ))}
//         </PageContainer>
//       </PageWrapper>
//     </Layout>
//   )
// }

// export default Indextest

// export const query = graphql`
//   query DynamicLandingQuery {
//     contentful1LandingPageDynamic(
//       id: { eq: "dc275053-c87d-58e1-9a13-845a5accc174" }
//     ) {
//       pageElements {
//         ... on ContentfulInstaSliderTemporary {
//           id
//           pageName
//           leftMenuHeading
//           internal {
//             type
//           }
//           images {
//             gatsbyImageData(placeholder: BLURRED, aspectRatio: 1)
//           }
//         }
//         ... on ContentfulEventTypesSection {
//           id
//           internal {
//             type
//           }
//           greyBackground
//           heading
//           leftMenuHeading
//           eventTypes {
//             pageName
//             subheadingForGrid
//             heroElement {
//               heroImage {
//                 gatsbyImageData(placeholder: BLURRED)
//               }
//               heroText {
//                 raw
//               }
//             }
//           }
//         }
//         ... on ContentfulFeatureElement {
//           id
//           leftMenuHeading
//           internal {
//             type
//           }
//           heading
//           isGreyBackground
//           image {
//             title
//             gatsbyImageData(placeholder: BLURRED)
//           }
//           introduction {
//             raw
//           }
//           linkLabel
//           linkUrl
//           secondSubHeading
//           subHeading
//         }
//         ... on ContentfulImageFullWidthStatic {
//           id
//           internal {
//             type
//           }
//           image {
//             fluid {
//               base64
//               tracedSVG
//               srcWebp
//               srcSetWebp
//             }
//             gatsbyImageData(placeholder: BLURRED)
//             title
//           }
//         }
//         ... on ContentfulIntroElement {
//           id
//           leftMenuHeading
//           internal {
//             type
//           }
//           greyBackground
//           heading
//           introHalfWidth
//           introduction {
//             raw
//           }
//           linkLabel
//           linkUrl
//         }
//       }
//       heroElement {
//         heroImage {
//           gatsbyImageData(placeholder: BLURRED)
//           title
//         }
//         heroText {
//           raw
//         }
//       }
//     }
//   }
// `
