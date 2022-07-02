import React from 'react'

export default function Post({ post }) {
  return (
    <>
      <div className="Post">
        <div className="__title">{post.title.rendered}</div>
        <div
          className="__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
      <div className="Divider"></div>
    </>
  )
}
