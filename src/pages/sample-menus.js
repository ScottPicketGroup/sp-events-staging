import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/HeroContentful"
import SampleMenus from "../templates/SampleMenus"

const EventsPage = ({data}) => {


  return (
    <Layout>
      <Seo title="See our sample menus" />
      <Hero image={data.contentfulSampleMenusPageContent.heroMedia} />
      <SampleMenus data={data.contentfulSampleMenusPageContent} />
    </Layout>
  )
}

export default EventsPage


export const query = graphql`
query sampleMenusAndSampleMenuImages {
  contentfulSampleMenusPageContent(
    id: {eq: "f1ebb42d-e9c3-5b2b-a83f-a6ccf487a8e5"}
  ) 
  
  {
    heroMedia {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
    pageTitle
    introduction {
      raw
    }
    enquireSection {
      enquireDescription {
        raw
      }
      enquireHeading
    }
    venueMenus {
      venueName
      venueImage {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        title
      }
      subheading
      description {
        raw
      }
      canaps {
        menuItem
      }
      canapsImage {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
      sitDownMenu {
        entrees
        entreeMenuItems {
          menuItem
        }
        main
        mainMenuItems {
          menuItem
        }
        dessertMenuItems {
          menuItem
        }
        dessertsHeading
      }
      sharedTableMenu {
        entrees
        entreeMenuItems {
          menuItem
        }
        dessertsHeading
        dessertMenuItems {
          menuItem
        }
        main
        mainMenuItems {
          menuItem
        }
      }
      drinksMenu {
        menuItem
      }
      drinksMenuImage {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
}

`