import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import PostDate from "./postdate"
import Image2 from "../images/image5.svg?raw=1"

export default () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            tags
          }
          excerpt(pruneLength: 100)
          id
        }
      }
    }
  }
  `)
  
  const posts = data.allMdx.edges;

  return (
    <div>
      <div className="flex justify-center mt-8">
        <div>
          <h1 className="text-5xl font-bold text-center text-primary mb-2 border-b-2 border-indigo-400">Last 3 articles</h1>
        </div>
      </div>
        <div className="flex flex-wrap justify-between mt-16 mb-16 w-full items-center">
          <div className="hidden md:block w-full md:w-1/2 pb-2 md:pb-0 text-left md:text-right">
            <img src={Image2} alt="Logo" />
          </div>
          <div className="w-full md:w-1/2 text-left pl-16">
          
          {posts.map((post) => (  
            <div key={post.node.id}>
              <Link className="text-xl font-bold text-primary block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500" to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
              <PostDate date={post.node.frontmatter.date} />
              <div className="text-primary mb-8">{post.node.excerpt}</div>
            </div>
          ))}  
          
          </div>
        </div>

    </div>  
  )
}
