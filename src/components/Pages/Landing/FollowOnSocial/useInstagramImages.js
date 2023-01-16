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
            }
            permalink
          }
        }
      }
    }
    
    `
  )
  return instagramImages.allInstagramImage.edges.reduce((nodes, image) => {
    nodes.push({image: image.node.localFile.childImageSharp, url: image.node.permalink})
    
    return nodes
    console.log('nodes', nodes)
  }, [])
}
