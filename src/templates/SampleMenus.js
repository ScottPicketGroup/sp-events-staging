import React, { useState, useRef, useEffect } from "react"

import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
  SectionContainer,
} from "../components/StyledComponents/containers.css"

import PageIntro from "../components/Common/PageIntro"
import ImageAndDescription from "../components/Pages/SampleMenus/ImageAndDescription"
import Accordion from "../components/Common/Accordion/Accordion"
import AccordionWithImage from "../components/Common/AccordionWithImage/AccordionWithImage"

import sampleMenuArray from "../contents/sampleMenuArray.json"
import { useStaticQuery, graphql } from "gatsby"

const SampleMenus = () => {
  const imageDatas = useStaticQuery(graphql`
    query SampleMenuImages {
      allFile(
        filter: {
          name: {
            in: [
              "estelle"
              "accordion"
              "martilda"
              "chancery-lane"
              "longrain"
              "le-shoppe"
              "greatest-hits"
            ]
          }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  `)

  const menuItems = [
    "Sample Menus",
    "Estelle",
    "Matilda",
    "Chancery Lane",
    "Longrain",
    "Le Shoppe",
    "Greatest Hits",
    "Enquire",
  ]

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
          <PageIntro
            title="Sample Menus"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsa luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sectetur."
          />
        </div>
        <div ref={el => (itemsRef.current[1] = el)}>
          <ImageAndDescription
            data={sampleMenuArray[0]}
            image={imageDatas.allFile.nodes.filter(item => item.name === "estelle")[0].childImageSharp}
          />
          <SectionContainer marginBottom="lg">
            {sampleMenuArray[0].accordion.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                content={item.content}
              />
            ))}
          </SectionContainer>
        </div>

        <div ref={el => (itemsRef.current[2] = el)}>
          <ImageAndDescription
            data={sampleMenuArray[1]}
            image={imageDatas.allFile.nodes.filter(item => item.name === "martilda")[0].childImageSharp}
          />
          <SectionContainer marginBottom="lg">
            {sampleMenuArray[1].accordion.map((item, index) => (
              <AccordionWithImage
                key={index}
                title={item.title}
                content={item.content}
                description={item.description}
                image={imageDatas.allFile.nodes.filter(item => item.name === "accordion")[0].childImageSharp}
              />
            ))}
          </SectionContainer>
        </div>
        <div ref={el => (itemsRef.current[3] = el)}>
          <ImageAndDescription
            data={sampleMenuArray[2]}
            image={imageDatas.allFile.nodes.filter(item => item.name === "chancery-lane")[0].childImageSharp}
          />
          <SectionContainer marginBottom="lg">
            {sampleMenuArray[2].accordion.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                content={item.content}
              />
            ))}
          </SectionContainer>
        </div>
        <div ref={el => (itemsRef.current[4] = el)}>
          <ImageAndDescription
            data={sampleMenuArray[3]}
            image={imageDatas.allFile.nodes.filter(item => item.name === "longrain")[0].childImageSharp}
          />
          <SectionContainer marginBottom="lg">
            {sampleMenuArray[3].accordion.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                content={item.content}
              />
            ))}
          </SectionContainer>
        </div>
        <div ref={el => (itemsRef.current[5] = el)}>
          <ImageAndDescription
            data={sampleMenuArray[4]}
            image={imageDatas.allFile.nodes.filter(item => item.name === "le-shoppe")[0].childImageSharp}
          />
          <SectionContainer marginBottom="lg">
            {sampleMenuArray[4].accordion.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                content={item.content}
              />
            ))}
          </SectionContainer>
        </div>
        <div ref={el => (itemsRef.current[6] = el)}>
          <ImageAndDescription
            data={sampleMenuArray[5]}
            image={imageDatas.allFile.nodes.filter(item => item.name === "greatest-hits")[0].childImageSharp}
          />
          <SectionContainer marginBottom="xl">
            {sampleMenuArray[5].accordion.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                content={item.content}
              />
            ))}
          </SectionContainer>
        </div>
        <div ref={el => (itemsRef.current[7] = el)}>
          <PageIntro
            title="Enquire"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsa luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sectetur."
          />
        </div>
      </PageContainer>
    </PageWrapper>
  )
}

export default SampleMenus
