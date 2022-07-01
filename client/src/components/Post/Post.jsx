import React from 'react'

export default function Post({ post }) {
  return (
    <div key={post.id} className="Post">
      <div className="__title">{post.title.rendered}</div>
      <div
        className="__content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  )
}
