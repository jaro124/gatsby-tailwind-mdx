import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            slug
            date(formatString: "YYYY-MM-DD")
            tags
          }
          excerpt(pruneLength: 150)
        }
      }
    }
  }
  `)
  
  const posts = data.allMdx.edges;

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h1 className="text-5xl font-bold text-center text-primary mb-2 border-b-2 border-indigo-400">Best articles</h1>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-between mt-4 w-full">
      
      {posts.map((post) => (    
        <div className="w-full lg:w-1/3 text-left p-2 lg:p-4">
          <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-2 p-16">
            <h1 className="text-3xl font-bold text-primary mb-2">{post.node.frontmatter.title}</h1>
            <h2 className="text-sm font-medium text-indigo-400 mb-4 uppercase tracking-wide">{post.node.frontmatter.subtitle}</h2>
            <div className="text-primary">{post.node.excerpt}</div>         
            <div className="mt-8">
              <button className="bg-green-500 hover:bg-green-400 text-secondary font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                <Link to={post.node.frontmatter.slug}>Read more</Link>
              </button>
            </div>
          </div>
        </div>
      ))}  

      </div>
    </div>  
  )
}
