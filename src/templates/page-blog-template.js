import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostTags from "../components/posttags"
import PostTag from "../components/posttag"
import PostDate from "../components/postdate"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <SEO 
        title={frontmatter.title}
        keywords={frontmatter.tags}
      />
      <div className="px-4">
        <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">
          <h1 className="text-4xl font-medium text-primary mb-2">{frontmatter.title}</h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">{frontmatter.subtitle}</h2>
          <div className="flex flex-wrap justify-between">
            <div className="flex-shrink">
              <PostDate date={frontmatter.date} /> 
            </div>
            <div className="flex-shrink">
            <PostTag tags={frontmatter.tags} />
            </div>
          </div>
        
        
        <hr className="pb-6" />
        
          <div className="text-primary">
            <MDXRenderer>{body}</MDXRenderer>
          </div>

          <hr className="mt-6" />
        <PostTags tags={frontmatter.tags} />

        <div className="mt-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to="/articles">Back to list</Link>
          </button>
        </div>          
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