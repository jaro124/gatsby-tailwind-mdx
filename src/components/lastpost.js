import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import BoxImg from "../images/image1.svg?raw=1"

export default () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(limit: 1, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            slug
            date(formatString: "YYYY-MM-DD")
            tags
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
  `)
  
  const post = data.allMdx.edges[0].node;

  return (
    <div>
        <div className="flex flex-wrap justify-between mt-16 mb-16 w-full items-center">
          <div className="w-full md:w-1/2 text-left md:text-right pr-4">
            <h1 className="text-5xl font-bold text-primary mb-2">{post.frontmatter.title}</h1>
            <h2 className="text-xl font-medium text-indigo-400 mb-4 uppercase tracking-wide">{post.frontmatter.subtitle}</h2>
            
            <div className="text-primary">{post.excerpt}</div>         
            <div className="mt-8">
              <button className="bg-green-500 hover:bg-green-400 text-secondary font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                <Link to={post.frontmatter.slug}>Read more</Link>
              </button>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2 pl-4 pb-2 md:pb-0 text-left md:text-right">
            <img src={BoxImg} alt="Logo" />
          </div>
        </div>

    </div>  
  )
}
