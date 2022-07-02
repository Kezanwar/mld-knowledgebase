import React from 'react'
import { useMemo } from 'react'
import PostList from '../Post/PostList'

export default function Category({ category }) {
  const { title, description, posts } = category
  return useMemo(() => {
    return (
      <section className="category" id={title}>
        <h2 className="category__title">{title}</h2>
        <p className="category__description">{description}</p>
        <PostList posts={posts} />
      </section>
    )
  }, [category])
}
