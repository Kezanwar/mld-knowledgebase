import React from 'react'
import Post from '../Post/Post'

export default function Main({ posts }) {
  return (
    <main id="main" className="Main">
      {posts && posts.map((post) => <Post post={post} />)}
    </main>
  )
}
