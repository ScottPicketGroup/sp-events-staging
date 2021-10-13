import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Common/Hero/Hero"
import PartiesAndEvents from "../templates/PartiesAndEvents"

const EventsPage = () => {
  const image = useStaticQuery(graphql`
    query PartiesAndEventsHeroImage {
      allFile(filter: { name: { in: "events" } }) {
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
      <PartiesAndEvents />
    </Layout>
  )
}

export default EventsPage
