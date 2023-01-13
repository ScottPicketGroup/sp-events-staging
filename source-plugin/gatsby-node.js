/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
// constants for your GraphQL Post and Author types

const fetch = require("node-fetch")
const POST_NODE_TYPE = `InstagramImage`

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions
  const url = `https://graph.instagram.com/me/media?fields=media_type,caption,permalink,media_url&access_token=IGQVJYVzhLYnppelBVZAHRjNFY1d1RfZAjNmX2ZABdkRhVTY5c2VkMEFkeGtZAS3U2SmxhSUF3bFVjS25uSlpjZA0hUaUdDOERLbF9KRXRnaFFzLUJIaktpS2RTOW9BRWlzRGtyUDFDVlNtYXRWWm5JVVF0SwZDZD`
  
  const response = await fetch(url)
  const rawData = await response.json()

  const data = rawData.data && rawData.data.filter(image => image.media_type === "IMAGE").slice(0, 8)

  //loop through data and create Gatsby nodes
  data && data.forEach(instagramImage =>
    createNode({
      ...instagramImage,
      id: createNodeId(`${POST_NODE_TYPE}-${instagramImage.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        contentDigest: createContentDigest(instagramImage),
      },
    })
  )

  return
}

exports.onCreateNode = async ({
    node, // the node that was just created
    actions: { createNode, createNodeField },
    createNodeId,
    getCache,
  }) => {
    if (node.internal.type === POST_NODE_TYPE) {
      const fileNode = await createRemoteFileNode({
        // the url of the remote image to generate a node for
        url: node.media_url,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      })
  
      if (fileNode) {
        console.log('fileNode', fileNode)
        createNodeField({ node, name: 'localFile', value: fileNode.id })
      }
    }
  }

  exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
  
    createTypes(`
      type Post implements Node {
        localFile: File @link(from: "fields.localFile")
      }
    `)
  }