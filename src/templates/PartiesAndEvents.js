import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/HeroContentful"

import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
} from "../components/StyledComponents/containers.css"

import PageIntro from "../components/Common/PageIntro"
import SliderGallery from "../components/Common/SliderGallery/SliderGallery"
import GalleryDescription from "../components/Pages/PartiesAndEvents/GalleryDescription"
import EnquireForm from "../components/Common/EnquireForm"
import RestaurantSlider from "../components/Common/GallerySlider/GallerySlider"

const PartiesAndEvents = ({ pageContext }) => {
  const {
    pageName,
    heroMedia,
    introduction,
    sliderGallery,
    mainPageContent,
    mainPageHeading,
    sampleMenusHeading,
    sampleMenusIntroduction,
    landing_page_content,
  } = pageContext.eventData

  const { enquireHeading, enquireDescription } =
    landing_page_content[0].enquireSection

  const menuItems = ["Introduction", "Gallery", "Sample Menus", "Enquires"]

  const [items] = useState([])
  const [heights] = useState([])
  const [scrollY, setScrollY] = useState(0)

  const itemsRef = useRef([])

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

  return (
    <Layout>
      <Seo title={pageName} />
      <Hero image={heroMedia[0].gatsbyImageData} />
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
            <PageIntro title={pageName} intro={introduction} />
          </div>
          <div ref={el => (itemsRef.current[1] = el)}>
            <RestaurantSlider images={sliderGallery} />
            <GalleryDescription
              title={mainPageHeading}
              content={mainPageContent}
            />
          </div>
          <div ref={el => (itemsRef.current[2] = el)}>
            <PageIntro
              title={sampleMenusHeading}
              intro={sampleMenusIntroduction}
              option
            />
          </div>
          <div ref={el => (itemsRef.current[3] = el)}>
            <PageIntro title={enquireHeading} intro={enquireDescription} none />
          </div>
          <div style={{ width: "100%" }}>
            <EnquireForm />
          </div>
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default PartiesAndEvents
