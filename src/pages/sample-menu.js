import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/Hero"
import SampleMenus from "../templates/SampleMenus"

const EventsPage = () => {
  const image = useStaticQuery(graphql`
    query SampleMenuHeroImage {
      allFile(filter: { name: { in: "sample-menu" } }) {
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

  return (
    <Layout>
      <Seo title="Welcome to Scott Pickett Events" />
      <Hero image={image} />
      <SampleMenus />
    </Layout>
  )
}

export default EventsPage
