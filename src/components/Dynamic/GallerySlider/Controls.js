import React from "react"
import { Constrols, Control } from "./GallerySlider.css"

const Controls = ({active, setActive, limit}) => {

const handleNext = () => {
    if(active >= 0 && active < limit -1) setActive(active + 1) 
}

const handlePrevious = () => {
    if(active >= 1 && active < limit + 1 ) setActive(active - 1) 
}

  return (
    <Constrols>
      <Control
      onClick={handlePrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.039"
          height="15.472"
          viewBox="0 0 25.039 15.472"
        >
          <path
            id="Path_11622"
            data-name="Path 11622"
            d="M-14697.769-10580.506l-7.028-7.029,7.028-7.028"
            transform="translate(14706.211 10595.271)"
            fill="none"
            stroke="#333"
            stroke-width="2"
          />
          <path
            id="Path_11623"
            data-name="Path 11623"
            d="M-14704.8-10578.06h23.625"
            transform="translate(14706.211 10585.796)"
            fill="none"
            stroke="#333"
            stroke-width="2"
          />
        </svg>
      </Control>
      <Control
      onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.039"
          height="15.472"
          viewBox="0 0 25.039 15.472"
        >
          <path
            id="Path_11622"
            data-name="Path 11622"
            d="M7.028,14.058,0,7.029,7.028,0"
            transform="translate(23.625 14.765) rotate(-180)"
            fill="none"
            stroke="#333"
            stroke-width="2"
          />
          <path
            id="Path_11623"
            data-name="Path 11623"
            d="M0,0H23.625"
            transform="translate(23.625 7.736) rotate(-180)"
            fill="none"
            stroke="#333"
            stroke-width="2"
          />
        </svg>
      </Control>
    </Constrols>
  )
}

export default Controls
