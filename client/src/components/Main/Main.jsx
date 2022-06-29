import React from 'react'

export default function Main({ posts }) {
  return (
    <main id="main" className="Main">
      Main
      <div id="hello"></div>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className="post">
            <div className="__title">{post.title.rendered}</div>
            <div
              className="__content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        ))}
    </main>
  )
}
