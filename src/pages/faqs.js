import React, { useRef, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/Hero"
import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
} from "../components/StyledComponents/containers.css"
import Summary from "../components/Pages/FAQ/Summary"
import FirstSection from "../components/Pages/FAQ/FirstSection"
import SecondSection from "../components/Pages/FAQ/SecondSection"

const IndexPage = () => {
  const image = useStaticQuery(graphql`
    query HeroImageForFAQs {
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

  const logit = () => {
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
    "FAQs",
    "Heading 1",
    "Heading 2",
  ]

 
  const [items] = React.useState([])
  const [heights] = React.useState([])

  const itemsRef = useRef([])

  useEffect(() => {
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

  return (
    <Layout>
      <Seo title="FAQs" />
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
            <Summary />
          </div>
          <div ref={el => (itemsRef.current[1] = el)}>
            <FirstSection />
          </div>
          <div ref={el => (itemsRef.current[2] = el)}>
            <SecondSection />
          </div>
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage
