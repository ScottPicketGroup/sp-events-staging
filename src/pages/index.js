import React, { useRef, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/Hero"
import Intro from "../components/Pages/Landing/Intro"
import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
} from "../components/StyledComponents/containers.css"
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

  const [scrollY, setScrollY] = useState(0)

  function logit() {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  const menuItems = [
    "Introduction",
    "Gallery",
    "OurFamily",
    "Parties & Events",
    "Partner Venues",
    "Enquiries",
    "Instagram",
  ]

 
  const [items] = React.useState([])
  const [heights] = React.useState([])

  const itemsRef = useRef([])

  useEffect(() => {
    var bodyRect = document.body.getBoundingClientRect()
    itemsRef.current.map(i => {
      const meh = i.getBoundingClientRect()

      items.push(meh.top)
    })
    itemsRef.current.map(i => {
      const scrollTop = i.scrollHeight
      heights.push(scrollTop)
    })
    itemsRef.current = itemsRef.current.slice(0, items.length)

    return () => {}
  }, [])

  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

  console.log(heights[2], items[2], heights[2] + items[2],scrollY)

  return (
    <Layout>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero image={image} />

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

        <PageContainer>
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
