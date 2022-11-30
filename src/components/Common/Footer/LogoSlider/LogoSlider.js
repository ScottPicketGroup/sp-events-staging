import React, { useState, useEffect } from "react"
import Marquee from "react-marquee-slider"
import styled from "styled-components"
import useLogoSliderQuery from "./useLogoSliderQuery"



const LogoSliderNew = () => {

  const [velocity, setVelocity] = useState(0)
  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
     isBrowser &&  window.innerWidth > 480 ? setVelocity(120) : setVelocity(20);
    }
  }, [isBrowser]);
  

  const logos = useLogoSliderQuery().logos


  return (
    <SliderExtended>
      <Marquee velocity={velocity} style={{display: `flex`, alignItems: `center`}}>
        {logos &&
          logos.map((logo, i) => (
            <LogoLink href={logo.url} target="_blank" key={i} rel="noreferrer"
            style={{display: `flex`, alignItems: `center`}}
            >
              <Img
                key={i}
                src={logo.image.imageSource}
                aspectRatio={logo.image.aspectRatio}
              />
            </LogoLink>
          ))}
      </Marquee>
    </SliderExtended>
  )
}

export default LogoSliderNew
export const LogoLink = styled.a`
  height: 7rem;
  display: flex;
  align-items: center;
`
const SliderExtended = styled.div`
  
  height: 9rem;
  display: flex;
  align-items: center;
  background: inherit;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  html body div#__next div.containerscss__PageContainer-sc-1h5pb7u-0.qfUJg div.Footercss__FooterContainer-sc-1bxvpwt-0.hDzQfu div.Footercss__FooterExpandContainer-sc-1bxvpwt-26.goYqYG div.Footercss__FooterWrapper-sc-1bxvpwt-1.fRVirO div.LogoSlider__SliderExtended-sc-11xz7eb-1.hXsYuO div.sc-iAvgwm.lnugPE div.sc-efBctP.bIfnUg {
    display: flex;
    align-items: center;
  }
  div > div {
    display: flex;
    align-items: center;
  }
`
const Img = styled.img`

  height: ${props =>
    props.aspectRatio > 0.91
      ? "7rem"
      : props.aspectRatio < 0.9 && props.aspectRatio > 0.3
      ? "2.5rem"
      : "1.25rem"};
  margin-right: 5rem;
`
export const ImgContainer = styled.div`
  display: flex !important;
  align-items: center !important;
`
