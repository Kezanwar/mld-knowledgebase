import React, { useContext, useEffect, useRef } from 'react'
import Category from '../Category/Category'
import { PostAndCats } from '../ContextProvider'

export default function Main(props) {
  const filteredPostsByCategories = useContext(PostAndCats)

  return (
    <main id="main" className="Main">
      <div className="intro">Welcome to My Local Deli</div>
      {filteredPostsByCategories &&
        filteredPostsByCategories.map((category) => {
          return <Category key={category.title} category={category} />
        })}
    </main>
  )
}
