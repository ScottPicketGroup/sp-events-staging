
// const fetch = require("node-fetch")
// const POST_NODE_TYPE = `InstagramImage`

// exports.sourceNodes = async({ actions,
//   createContentDigest,
//   createNodeId,}) => {

//   const {createNode} = actions

//   const url = `https://graph.instagram.com/me/media?fields=media_type,caption,permalink,media_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`

//   const result = await fetch(url)
//   const instaPosts = await result.json()
//   const data = instaPosts.data.filter(image => image.media_type === "IMAGE").slice(0, 8)

// data.forEach(instagramImage => {
//   createNode({
//     ...instagramImage,
//     id: createNodeId(`${POST_NODE_TYPE}-${instagramImage.id}`),
//     originalId: instagramImage.id,
//     parent: null,
//     children: [],
//     internal: {
//       type: POST_NODE_TYPE,
//       contentDigest: createContentDigest(instagramImage),
//     },
//   })
// })
 

//   console.log('instaPosts', data)
// }

// const { createRemoteFileNode } = require("gatsby-source-filesystem")
// exports.onCreateNode = async ({
//   node, // the node that was just created
//   actions: { createNode, createNodeField },
//   createNodeId,
//   getCache,
// }) => {
  
//   if (node.internal.type === POST_NODE_TYPE) {
//     const fileNode = createRemoteFileNode({
//       // the url of the remote image to generate a node for
//       url: node.media_url,
//       parentNodeId: node.id,
//       createNode,
//       createNodeId,
//       getCache,
//     })

//     if (fileNode) {
//       console.log('fileNode', fileNode)
//       createNodeField({ node, name: 'localFile', value: fileNode.id })
//     }
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//     type Post implements Node {
//       localFile: File @link(from: "fields.localFile")
//     }
//   `)
// }exports.onCreateNode = async ({
    node, // the node that was just created
    actions: { createNode, createNodeField },
    createNodeId,
    getCache,
  }) => {
    if (node.internal.type === POST_NODE_TYPE) {
      // console.log('node', node)
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