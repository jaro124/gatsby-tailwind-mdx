import React from "react"
import { Link } from "gatsby"

const PostNavigation = ({ previous, next}) => (
  <div>  
    <div className="flex flex-wrap justify-between mt-4 w-full">
      <div className="w-full md:w-1/3 text-center md:text-left">
        {previous === false ? null : (
          <>
            {previous && (
              <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                <Link to={previous.node.frontmatter.slug}>Prev</Link>
              </button>
            )}
          </>
        )}    
      </div>
      <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center">
        <button className="bg-green-500 hover:bg-green-400 text-secondary font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          <Link to="/articles">Back to list</Link>
        </button>
      </div>
      <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center md:text-right">
        {next === false ? null : (
          <>
            {next && (
              <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                <Link to={next.node.frontmatter.slug}>Next</Link>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  </div>
)

export default PostNavigation