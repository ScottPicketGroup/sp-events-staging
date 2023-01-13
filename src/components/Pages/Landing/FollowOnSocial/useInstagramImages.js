import { useStaticQuery, graphql } from "gatsby"

export const useInstgramImages = () => {
  const instagramImages = useStaticQuery(
    graphql`
      query instaImages {
        allFile {
          totalCount
          edges {
            node {
                childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  )
  return instagramImages.allFile.edges.reduce((nodes, image) => {
    if (!!image.node.url && image.node.url.includes("insta")) {
      nodes.push(image.node)
    }

    return nodes
  }, [])
}
