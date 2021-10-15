import React, { useState, useRef, useEffect } from "react"

import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
} from "../../components/StyledComponents/containers.css"

import PageIntro from "../../components/Common/PageIntro"
import SliderGallery from "../../components/Common/SliderGallery/SliderGallery"
import GalleryDescription from "../../components/Pages/PartiesAndEvents/GalleryDescription"

const PartiesAndEvents = () => {
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
            title="Weddings"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsa luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sectetur."
          />
        </div>
        <div ref={el => (itemsRef.current[1] = el)}>
          <SliderGallery />
          <GalleryDescription />
        </div>
        <div ref={el => (itemsRef.current[2] = el)}>
          <PageIntro
            title="Sample Menus"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsa luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sectetur."
            option
          />
        </div>
        <div ref={el => (itemsRef.current[3] = el)}>
          <PageIntro
            title="Enquire"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsa luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sectetur."
            none
          />
        </div>
      </PageContainer>
    </PageWrapper>
  )
}

export default PartiesAndEvents
