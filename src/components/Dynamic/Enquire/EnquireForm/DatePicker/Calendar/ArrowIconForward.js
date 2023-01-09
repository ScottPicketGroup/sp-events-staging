import React from "react"
import styled from "styled-components"
export const ArrowIconForward = ({
  
}) => {
  
  return (
    <ArrowWrapper >
      <svg
     
        xmlns="http://www.w3.org/2000/svg"
        width="12.707"
        height="7.06"
        viewBox="0 0 12.707 7.06"
      >
        <path
          id="Path_12059"
          data-name="Path 12059"
          d="M6,12,0,6,6,0"
          transform="translate(0.354 6.353) rotate(-90)"
          fill="none"
          stroke="#7e7e7e"
          stroke-width="1"
        />
      </svg>
    </ArrowWrapper>
  )
}

export const ArrowWrapper = styled.div`
 svg{ transform: rotate(270deg);}
`
