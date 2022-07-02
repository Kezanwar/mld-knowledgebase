import React from 'react'
import { useMemo } from 'react'
import PostList from '../Post/PostList'
import Icons from './categoryIcons'

export default function Category({ category }) {
  const { title, description, posts } = category
  return useMemo(() => {
    return (
      <section className="Category" id={title}>
        <div className="__title-section">
          <h2 className="title">
            {Icons[title]} {title}
          </h2>
          {description && <p className="description">{description}</p>}
        </div>
        <PostList posts={posts} />
      </section>
    )
  }, [category])
}
