import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Index() {
  
  return (
    <Layout>
    <SEO 
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />
    <div className="px-4">
      <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">
        <h1 className="text-2xl text-primary font-medium mb-2">Let's Build: With Tailwind CSS</h1>
        <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Tailwind CSS</h2>
        <p className="text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.</p>
        <div className="mt-4">
          <button aria-label="Read more" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to="/articles">Read more</Link>
          </button>
        </div>

        <div className="py-5">
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">#gatsby</span>
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">#tailwind</span>
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">#tailwindcss</span>
          <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">#react</span>
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">#framework</span>
          <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">#develop</span>
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">#design</span>
        </div>
      </div>
    </div>


  </Layout>
)
  }
