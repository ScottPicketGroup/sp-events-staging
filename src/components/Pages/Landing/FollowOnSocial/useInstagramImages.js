import { useStaticQuery, graphql } from "gatsby"

export const useInstgramImages = () => {
  const instagramImages = useStaticQuery(
    graphql`
      query instaImages {
        allInstagramImage {
          edges {
            node {
              localFile {
                childImageSharp {
                  
                  gatsbyImageData
                }
                absolutePath
              }
            }
          }
        }
      }
    `
  )
  return instagramImages.allInstagramImage.edges.reduce((nodes, image) => {
    nodes.push(image.node.localFile)

    return nodes
    console.log('nodes', nodes)
  }, [])
}
