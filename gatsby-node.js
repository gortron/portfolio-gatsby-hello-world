const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            id
          }
        }
        nodes {
          data {
            project_title {
              html
            }
            project_description {
              html
            }
          }
        }
      }
    }
  `)
}
