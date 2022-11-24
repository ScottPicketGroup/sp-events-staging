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
  query DynamicPages {
    allContentfulEventsPageDynamic {
      edges {
        node {
          id
          pageName
          heroElement {
            heroText {
              raw
            }
            heroImage {
              gatsbyImageData(placeholder: BLURRED)
              title
            }
          }
          pageElements {
            ... on ContentfulEventTypeOptionsCollection {
              id
              internal {
                type
              }
              heading
              leftMenuHeading
              greyBackground
              optionsCollection {
                
                subHeading
                optionName
                linkLabel
                linkUrl
                image {
                  gatsbyImageData(placeholder: BLURRED)
                  title
                }
              }
              displayInLeftMenu
            }
            ... on ContentfulEnquireSection {
              id
              internal {
                type
              }
              enquireHeading
              leftMenuHeading
              enquireDescription {
                raw
              }
              marginBottom
              marginTop
            }
            ... on ContentfulIntroElement {
              id
              leftMenuHeading
              internal {
                type
              }
              greyBackground
              heading
              introHalfWidth
              introduction {
                raw
              }
              linkLabel
              linkUrl
            }
            ... on ContentfulImageGallery {
              id
              heading
              leftMenuHeading
              internal {
                type
              }
              images {
                gatsbyImageData(placeholder: BLURRED)
                title
              }
            }
            ... on ContentfulFeatureElement {
              id
              leftMenuHeading
              internal {
                type
              }
              heading
              isGreyBackground
              image {
                title
                gatsbyImageData(placeholder: BLURRED)
              }
              introduction {
                raw
              }
              linkLabel
              linkUrl
              secondSubHeading
              subHeading
            }
            ... on ContentfulImageFullWidthStatic {
              id
              internal {
                type
              }
              image {
                gatsbyImageData(placeholder: BLURRED)
                title
              }
            }
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
  const EventTemplate = path.resolve(`src/templates/DynamicTemplate.js`)
  result.data.allContentfulEventsPageDynamic.edges.forEach(({ node }) => {
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
