/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    query EventPageQuery {
      allContentfulPartiesEvents {
        edges {
          node {
            id
            pageName
            heroMedia {
              title
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
            introduction {
              raw
            }
            sliderGallery {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              title
            }
            mainPageHeading
            mainPageContent {
              raw
            }
            sampleMenusHeading
            sampleMenusIntroduction {
              raw
            }
           
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const EventTemplate = path.resolve(`src/templates/PartiesAndEvents.js`)
  result.data.allContentfulPartiesEvents.edges.forEach(({ node }) => {
    const path = `/events/${node.pageName.toLowerCase().replace(" ", "-")}`
    createPage({
      path,
      component: EventTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        eventData: node,
      },
    })
  })
}
