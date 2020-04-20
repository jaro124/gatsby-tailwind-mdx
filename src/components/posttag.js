import React from "react"

const PostTag = ({ tags }) => (
  <div>  
    <p className="text-sm text-gray-500 uppercase flex items-center pb-3 md:pl-8">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="text-gray-500 w-3 h-3">
          <path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
      </svg>
      {tags.map((tag) => (
        <span className="pl-4">#{tag}</span>
      ))}
    </p>
  </div>
)

export default PostTag