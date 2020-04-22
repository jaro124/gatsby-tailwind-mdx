import React from "react"
import PostTags from "../components/posttags"
import PostDate from "../components/postdate"

const PostHeader = ({ title, subtitle, date, tags }) => (
  <div>  
    <h1 className="text-4xl font-medium text-primary mb-2">{title}</h1>
    <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">{subtitle}</h2>
    
    <div className="flex flex-wrap justify-between mt-4 w-full">
      <div className="w-full md:w-1/3 text-left">
        <PostDate date={date} /> 
      </div>
      <div className="w-full md:w-2/3 pt-2 md:pt-0 text-left md:text-right">
        <PostTags tags={tags} />
      </div>
    </div>
    
    <hr className="pb-6" />

</div>
)

export default PostHeader