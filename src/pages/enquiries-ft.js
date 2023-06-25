import React, { useRef } from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"
import Hero from "../components/Common/Hero/HeroContentfulDynamic"
import Layout from "../components/layout"
import Seo from "../components/seo"

// page components

import {
  PageContainer,
  PageWrapper,
} from "../components/StyledComponents/containers.css"

import useRefAttributes from "../components/Common/Hooks/useRefAttributes"
import useWatchScroll from "../components/Common/Hooks/useWatchScroll"

import { Helmet } from "react-helmet"
import { LeftMenu } from "../components/Dynamic/LeftMenu/LeftMenu"
const Indextest = ({ data, errors, setErrors }) => {
  const { heroElement, pageElements } = data.contentful6Enquiries
  const itemsRef = useRef([])

  const { scrollY } = useWatchScroll()
  const { items, heights } = useRefAttributes(itemsRef)

  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })
  const page = useLocation().pathname.replace("/", "")

  return (
    <Layout>
      <Helmet>
        <script src="https://smtpjs.com/v3/smtp.js" />
      </Helmet>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero data={heroElement} />
      <PageWrapper>
        <LeftMenu
          pageElements={pageElements}
          executeScroll={executeScroll}
          scrollY={scrollY}
          items={items}
          heights={heights}
          itemsRef={itemsRef}
        />
        <PageContainer>
          <FunctionTrackerFormContainer id="ftenquire665"></FunctionTrackerFormContainer>
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default Indextest

export const FunctionTrackerFormContainer = styled.div`
  background-color: inherit !important;
  .ftpage-container {
    background-color: inherit !important;
  }
  .ftform-group {
    color: white !important;
  }
  .ftrow {
    margin-left: -10px !important;
    margin-right: -00px !important;
    display: flex !important;
    flex-direction: column !important;
  }
  #enquireform > div:nth-child(9) > div > div > div {
    display: flex;
    flex-direction: row !important;
  }
  #enquireform > div:nth-child(10) > div > div > div {
    display: flex;
    flex-direction: row !important;
  }

  #enquireform > div:nth-child(1) {
    font-size: 1rem;
  }
  //*[@id="enquireform"]/div[9]/div
  .ftcontrol-label {
    color: white !important;
    text-transform: uppercase !important;
  }
  .ftform-control {
    border-radius: 0px !important;
    background-color: transparent !important;
    color: white !important;
    box-shadow: none !important;
    border: none !important;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")} !important;
  }
  input {
    background: rgba(255, 255, 255, 0) !important;
    border: none !important;
    padding: 1.5rem 0 !important;
    font-size: 0.75rem !important;
    line-height: none !important;

    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")} !important;
    ::placeholder {
      color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
      font-size: 1rem;
      margin-bottom: 10rem;
      background: transperant;
      font-family: normal;
    }
    :focus {
      outline: none !important;
      background: transparent !important;
      font-family: normal !important;
      height: 3rem !important;
      font-size: 150% !important;
    }
    :valid {
      box-shadow: none !important;
      color: white !important;
      font-size: 1rem !important;
      font-family: normal !important;
    }
    ::-moz-focus-outer {
      color: white !important;
    }
    @media screen and (max-width: 450px) {
      width: 100% !important;
    }
  }
  .eventadditionalnotesfield {
    background: inherit !important;
  }
  .select2-selection--single:not([class*="bg-"]):not([class*="border-"]) {
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    border-bottom: 1px solid white;
    border-radius: 0;
  }
  .select2-selection--single:not([class*="bg-"]) {
    background-color: transparent !important;
  }
  .select2-selection__rendered {
    color: white !important;
    background-color: transparent !important;
  }

  /* Around the search field */
  .select2-search {
    color: white;
    background-color: transparent !important;
  }

  /* Search field */
  .select2-search input {
    color: white;
    background-color: transparent !important;
  }

  /* Each result */
  .select2-results {
    color: white;
    background-color: inherit;
  }

  /* Higlighted (hover) result */
  .select2-results__option--highlighted {
    color: white;
  }

  /* Selected option */
  .select2-results__option[aria-selected="true"] {
    color: white;
  }

  .select2-container {
    border: 0;
    width: 100% !important ;
    margin: 1rem 0 !important;
  }
  element.style .select2-selection--single:not([class*="bg-"]) {
    background-color: transparent !important;
  }
  .select2-selection--single:not([class*="bg-"]) {
    background-color: transparent !important;
  }

  .select2-selection--multiple:not([class*="bg-"]) {
    background-color: transparent !important;
  }

  .select2-selection__arrow {
    background-color: inherit;
  }
  .select2-selection__placeholder {
    color: white !important;
  }
  .select2-search__field {
    color: white !important;
  }
  .select2-selection__arrow::before {
    content: "";
    display: none;
  }

  .form-control-uniform {
    color: white !important;
    font-weight: bold !important;
  }
  .ftform-control::-webkit-input-placeholder {
    color: white;
  } /* WebKit, Blink, Edge */
  .ftform-control:-moz-placeholder {
    color: white;
  } /* Mozilla Firefox 4 to 18 */
  .ftform-control::-moz-placeholder {
    color: white;
  } /* Mozilla Firefox 19+ */
  .ftform-control:-ms-input-placeholder {
    color: white;
  } /* Internet Explorer 10-11 */
  .ftform-control::-ms-input-placeholder {
    color: white;
  } /* Microsoft Edge */
  .checker span {
    color: #dddddd;
    border: 2px solid #dddddd;
  }
  .picker__header {
    color: white;
  }
  .picker__table {
    color: white;
  }
  ..select2-selection--single:not([class*="bg-"]):not([class*="border-"]) {
    border-color: transparent !important;
  }
  .select2-results__option[aria-selected="true"] {
    background-color: white !important;
    color: inherit;
  }
  .select2-results__option select2-results__option--highlighted {
    background-color: white !important;
  }
  /*  */
  #enquireform > div:nth-child(16) > input {
    font-family: normal !important;
    font-size: 1rem !important;
    background: transparent !important;
    text-transform: uppercase !important;
    // line-height: 46px !important;
    border-radius: 0px !important;
    border: 1px solid white !important;
    width: 225px !important;
    display: flex !important;
    flex-direction: column !important;
    padding: 1rem 2.75rem !important;
    justify-content: center !important;
    align-items: center !important;
    transition: all 0.2s ease-in-out;
    :hover {
      color: #2b3c31 !important;
      background: white !important;
    }
  }
  .checker input[type="checkbox"],
  .choice input[type="radio"] {
    border: none;
    background: none;
    display: -moz-inline-box;
    display: inline-block;
    margin: 0;
    vertical-align: top;
    cursor: pointer;
    position: absolute;
    height: 30px;
    width: 30px;
    z-index: 2;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .checker span {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #f0e9d5;
    transition: all ease-in-out 300ms;
  }
  span.checked {
    background: rgb(15, 35, 29);
  }
  #enquireform > div:nth-child(15) > div {
    flex-direction: row !important;
  }
  #enquireform > div:nth-child(15) > div > div {
    width: 10% !important;
  }
  #enquireform > div:nth-child(15) > div > label {
    order: 1 !important;
    width: 70% !important;
  }
  #enquireform > p:nth-child(1) {
    margin-left: 0.25rem;
  }
`
