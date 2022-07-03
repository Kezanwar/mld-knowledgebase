import React from 'react'

export default function Post({ post, index }) {
  return (
    <>
      <div id={post.slug} className="Post">
        <p className="index">{index + 1}</p>
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
