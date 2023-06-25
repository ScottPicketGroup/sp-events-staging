// import { useStaticQuery, graphql } from "gatsby"

// export const useInstgramImages = () => {
//   const instagramImages = useStaticQuery(
//     graphql`
//     query instaImages {
//       allInstagramImage {
//         edges {
//           node {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//             permalink
//           }
//         }
//       }
//     }

//     `
//   )
//   return instagramImages.allInstagramImage.edges.reduce((nodes, image) => {
//     nodes.push({image: image.node.localFile.childImageSharp, url: image.node.permalink})

//     return nodes

//   }, [])
// }

import { useEffect, useState } from "react"
import axios from "axios"
export const useInstagramImages = () => {
  const [instagramImages, setInstagramImages] = useState([])

  useEffect(() => {
    const fetchInstagramImages = async () => {
      try {
        let accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

        const clientId = process.env.CLIENT_ID
        const clientSecret = process.env.CLIENT_SECRET

        const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}&client_secret=${clientSecret}&client_id=${clientId}`
        const newToken = ""

        axios
          .get(refreshUrl)
          .then(response => {
            const newAccessToken = response.data.access_token
            console.log("New Access Token:", newAccessToken)

            newToken = newAccessToken
          })
          .catch(error => {
            console.error("Error refreshing access token:", error)
          })

        // Make the API request to fetch the user's media
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=media_type,caption,permalink,media_url&access_token=${accessToken}`
        )
        const data = await response.json()
        console.log("data", data)
        const images = data.data.filter(image => image.media_type === "IMAGE")

        // Sort the images by timestamp in descending order
        images.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

        // Get the last 8 images
        const last8Images = images.slice(0, 8)

        // Extract the URLs and titles from the response
        const imagesToMap = last8Images.map(image => ({
          url: image.permalink,
          image: image.media_url,
          title: image.caption || "No caption available",
        }))

        setInstagramImages(imagesToMap)
      } catch (error) {
        console.error("Error fetching Instagram images:", error)
      }
    }

    fetchInstagramImages()
  }, [])

  return { instagramImages }
}
