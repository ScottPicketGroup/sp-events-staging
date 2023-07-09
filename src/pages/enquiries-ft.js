// import React, { useRef } from "react"

// import { graphql, withPrefix } from "gatsby"
// import { useLocation } from "@reach/router"
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

// import { LeftMenu } from "../components/Dynamic/LeftMenu/LeftMenu"
// import Enquire from "../components/Dynamic/Enquire/Enquire"
// import { Helmet } from "react-helmet"
// import FTEnquire from "../components/Dynamic/Enquire/FunctionTrackerForm/FTEnquire"
// const Indextest = ({ data, errors, setErrors }) => {
//   const { heroElement, pageElements } = data.contentful6Enquiries
//   const itemsRef = useRef([])

//   const { scrollY } = useWatchScroll()
//   const { items, heights } = useRefAttributes(itemsRef)

//   const executeScroll = el =>
//     itemsRef.current[el].scrollIntoView({ behavior: "smooth" })
//   const page = useLocation().pathname.replace("/", "")

//   return (
//     <Layout>
//       <Helmet>
//         <script src="https://smtpjs.com/v3/smtp.js" />
//       </Helmet>
//       <Seo title="Welcome to Scott Pickett Events" />
//       <Hero data={heroElement} />
//       <PageWrapper>
//         <LeftMenu
//           pageElements={pageElements}
//           executeScroll={executeScroll}
//           scrollY={scrollY}
//           items={items}
//           heights={heights}
//           itemsRef={itemsRef}
//         />
//         <PageContainer>
//           {pageElements.map((element, i) => (
//             <div ref={el => (itemsRef.current[i] = el)} key={i}>
//               {element.internal.type === "ContentfulEnquireSection" ? (
//                 <FTEnquire
//                   data={element}
//                   page={page}
//                   errors={errors}
//                   executeScroll={executeScroll}
//                   ref={el => (itemsRef.current[i] = el)}
//                 />
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
//   query DynamicEnquiryQuery {
//     contentful6Enquiries(id: { eq: "b984496b-5da1-5328-b794-fa748c8f89fb" }) {
//       id
//       heroElement {
//         heroImage {
//           gatsbyImageData(placeholder: BLURRED)
//           title
//         }
//         heroText {
//           raw
//         }
//       }
//       pageElements {
//         ... on ContentfulEnquireSection {
//           id
//           internal {
//             type
//           }
//           enquireHeading
//           leftMenuHeading
//           greyBackground
//           enquireDescription {
//             raw
//           }
//           marginBottom
//           marginTop
//         }
//       }
//     }
//   }
// `
