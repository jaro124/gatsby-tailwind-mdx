import React from "react"

const PostDate = ({ date }) => (
  <div>  
    <p className="text-sm text-gray-500 flex items-center pb-3 pr-8">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className="text-gray-500 w-3 h-3 mr-4">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      {date}
    </p>
  </div>
)

export default PostDate