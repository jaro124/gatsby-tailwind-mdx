/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/page-blog-template.js`)
  const blogListTemplate = path.resolve(`src/templates/page-list-blog-template.js`)

  const result = await graphql(`
    {
      allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          next {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              slug
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

  const posts = result.data.allMdx.edges;

  posts.forEach(( post, index ) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    createPage({
      path: post.node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        next,
        previous,
      }, 
    })
  })

  // Create blog-list pages
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
