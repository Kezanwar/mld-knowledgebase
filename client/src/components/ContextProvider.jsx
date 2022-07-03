import React, { createRef } from 'react'

export const ScrollSectionContext = React.createContext()
export const PostAndCats = React.createContext()

export default function ContextProvider({
  filteredPostsByCategories,
  children,
}) {
  let scrollRefsObj = {}
  filteredPostsByCategories.forEach((category) => {
    scrollRefsObj = { ...scrollRefsObj, [category.title]: createRef() }
    category.posts.forEach((post) => {
      scrollRefsObj = { ...scrollRefsObj, [post.slug]: createRef() }
    })
  })

  return (
    <ScrollSectionContext.Provider value={scrollRefsObj}>
      <PostAndCats.Provider value={filteredPostsByCategories}>
        {children}
      </PostAndCats.Provider>
    </ScrollSectionContext.Provider>
  )
}
