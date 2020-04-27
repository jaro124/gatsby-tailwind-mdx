import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/postlink"
import PostListNavigation from "../components/postlistnavigation"

export default function Template({
  data, pageContext // this prop will be injected by the GraphQL query below.
}) {
  const { edges } = data.allMdx 
  const { numPages, currentPage } = pageContext;
  return (
    <Layout>
      <SEO 
        title="List of articles"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className="px-4">
        <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">
          {edges.map((edge) => (
            <div key={edge.node.id}>
              <PostLink post={edge.node} />
            </div>
          ))}
          
          <div>
            <PostListNavigation 
              numPages={numPages}
              currentPage={currentPage} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            subtitle
            slug
            date
            tags
          }
        }
      }
    }
  }
`