import React from "react"
import { Link } from "gatsby"

const PostListNavigation = ({ numPages, currentPage }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const prevPageLink = "/articles/"+prevPage
  const nextPageLink = "/articles/"+nextPage
  return (
  <div>  
    <div className="flex flex-wrap text-primary justify-between mt-4 w-full">
      <div className="w-full md:w-1/3 text-center md:text-left">
        {!isFirst && (
          <button aria-label="Previous page" className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            <Link to={prevPageLink} rel="Previous page">
              ← Previous Page
            </Link>
          </button>         
        )}   
      </div>
      <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center">
        Page {currentPage} of {numPages}
      </div>
      <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center md:text-right">
        {!isLast && (
          <button aria-label="Next page" className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            <Link to={nextPageLink} rel="Next page">
              Next Page →
            </Link>
          </button>
        )}
      </div>
    </div>
  </div>
)}

export default PostListNavigation