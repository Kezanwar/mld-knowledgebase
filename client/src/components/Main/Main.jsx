import React from 'react'
import Category from '../Category/Category'

export default function Main(props) {
  const { filteredPostsByCategories } = props
  return (
    <main id="main" className="Main">
      {filteredPostsByCategories &&
        filteredPostsByCategories.map((category) => {
          return <Category category={category} />
        })}
    </main>
  )
}
