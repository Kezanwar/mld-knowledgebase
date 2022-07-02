import React, { useMemo } from 'react'
import Post from './Post'

const PostList = (props) => {
  const { posts } = props
  return posts.map((post, index) => (
    <Post index={index} key={post.id} post={post} />
  ))
}

export default PostList
