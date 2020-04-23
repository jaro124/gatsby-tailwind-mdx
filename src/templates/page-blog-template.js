import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostHeader from "../components/postheader"
import PostFooter from "../components/postfooter"
import PostNavigation from "../components/postnavigation"

export default function Template({
  data, pageContext // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO 
        title={frontmatter.title}
        keywords={frontmatter.tags}
      />
      <div className="px-4">
        <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">

          <PostHeader title={frontmatter.title} subtitle={frontmatter.subtitle} date={frontmatter.date} tags={frontmatter.tags} />
      
          <div className="text-primary">
            <MDXRenderer>{body}</MDXRenderer>
          </div>

          <PostFooter />

          <PostNavigation previous={previous} next={next} />
         
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: {slug: {eq: $path}}) {
      frontmatter {
        title
        subtitle
        slug
        date
        tags
      }
      id
      body
    }
  }
`