import React from "react"

import ClockIcon from "!svg-react-loader!../images/svg-icons/clock.svg?name=ClockIcon";

const PostDate = ({ date }) => (
  <div>  
    <p className="text-sm text-gray-500 flex items-center pb-3 pr-8">
      <ClockIcon />
      {date}
    </p>
  </div>
)

export default PostDate