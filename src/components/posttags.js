import React from "react"

const PostTags = ({ tags }) => (
  <div>  
    {tags.map((tag) => (
      (tag==="gatsby") ? <span className="inline-block bg-red-400 rounded px-3 py-1 text-xs font-semibold text-black mr-2 mt-2 mb-2">#{tag}</span> : <span className="inline-block bg-green-400 rounded px-3 py-1 text-xs font-semibold text-black mr-2 mt-2 mb-2">#{tag}</span>
    ))}
    
  </div>
)

export default PostTags