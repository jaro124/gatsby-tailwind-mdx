import React from "react"
import { Link } from "gatsby"

import PostHeader from "./postheader"

const PostLink = ({ post }) => (
  <div>
    <PostHeader title={post.frontmatter.title} subtitle={post.frontmatter.subtitle} date={post.frontmatter.date} tags={post.frontmatter.tags} />

    <div className="text-primary">{post.excerpt}</div>
    
    <div className="mt-4 mb-8">
      <button className="bg-green-500 hover:bg-green-400 text-secondary font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
        <Link to={post.frontmatter.slug}>Read more</Link>
      </button>
    </div>
  </div>
)
export default PostLink