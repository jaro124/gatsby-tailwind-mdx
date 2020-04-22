import React from "react"
import { Link } from "gatsby"

import PostTags from "../components/posttags"

const PostLink = ({ post }) => (
  <div>
    <h1 className="text-2xl font-medium text-primary mb-2"><Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link></h1>
    <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">{post.frontmatter.subtitle}</h2>
    <PostTags tags={post.frontmatter.tags}/>
    <p className="text-sm text-gray-500 flex items-center pb-3">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="text-gray-500 w-3 h-3 mr-3">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      {post.frontmatter.date}
    </p>
    <p className="text-primary">{post.excerpt}</p>
    
    <div className="mt-4 mb-8">
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link to={post.frontmatter.slug}>Read more</Link>
      </button>
    </div>
  </div>
)
export default PostLink