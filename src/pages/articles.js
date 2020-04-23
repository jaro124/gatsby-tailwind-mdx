import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/postlink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO 
        title="List of articles"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className="px-4">
        <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">
          {Posts}
        </div>
      </div>
    </Layout> 
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
            subtitle
            tags
          }
        }
      }
    }
  }
`