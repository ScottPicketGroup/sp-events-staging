import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/Hero"
import Intro from "../components/Pages/Landing/Intro"
import { PageContainer, PageWrapper, MenuContainer } from "../components/StyledComponents/containers.css"
import SliderGallery from "../components/Common/SliderGallery/SliderGallery"
import OurFamily from "../components/Pages/Landing/OurFamily/OurFamily"
import PartiesAndEvents from "../components/Menu/Parties&Events/PartiesAndEvents"
import PartnerVenues from "../components/Pages/Landing/PartnerVenues/PartnerVenues"
import Enquire from "../components/Pages/Landing/Enquire/Enquire"
import FollowUsOnSocial from "../components/Pages/Landing/FollowOnSocial/FollowUsOnSocial"

const IndexPage = () => {
  const image = useStaticQuery(graphql`
    query HeroImage {
      allFile(filter: { name: { in: "landing" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)


  const menuItems = [
    "Introduction",
    "Gallery",
    "OurFamily",
    "Parties & Events",
    "Partner Venues",
    "Enquiries",
    "Instagram",
  ]

  const [items] = React.useState([...menuItems])

  const itemsRef = useRef([])

  useEffect(() => {
    menuItems.map(i => {
      items.push(i)
    })
    itemsRef.current = itemsRef.current.slice(0, items.length)
    return () => {
      
    }
  }, [menuItems])

  

  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })
  console.log(itemsRef.current)

  return (
    <Layout>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero image={image} />

<PageWrapper>
      <MenuContainer>
        {menuItems.map((menuItem, i) => (
          <div key={i} onClick={() => executeScroll(i)}>
            {menuItem}
          </div>
        ))}
      </MenuContainer>

      <PageContainer >
        <div ref={el => (itemsRef.current[0] = el)}>
          <Intro />
        </div>
        <div ref={el => (itemsRef.current[1] = el)}>
          <SliderGallery />
        </div>
        <div ref={el => (itemsRef.current[2] = el)}>
          <OurFamily />
        </div>
        <div ref={el => (itemsRef.current[3] = el)}>
          <PartiesAndEvents />
        </div>
        <div ref={el => (itemsRef.current[4] = el)}>
          <PartnerVenues />
        </div>
        <div ref={el => (itemsRef.current[5] = el)}>
          <Enquire />
        </div>
        <div ref={el => (itemsRef.current[6] = el)}>
          <FollowUsOnSocial />
        </div>
      </PageContainer>

      </PageWrapper>
    </Layout>
  )
}

export default IndexPage
