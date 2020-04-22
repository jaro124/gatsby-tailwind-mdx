import React from "react"

const PostTags = ({ tags }) => (
  <div>  
    <div className="flex flex-wrap text-sm text-gray-500 uppercase justify-start md:justify-end">
      <div className="pt-1">
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
      </div>
      {tags.map((tag) => (
        <div className="pl-2">&nbsp;#{tag}</div>
      ))}
    </div>
  </div>
)

export default PostTags