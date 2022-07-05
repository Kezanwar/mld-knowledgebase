import React from 'react'

export default function NavBlock(props) {
  const { category, scroll, scrollRefs } = props

  return (
    <nav className="Nav-block">
      <h4 onClick={scroll} data-target={category.title} className="nav-title">
        {category.title}
      </h4>
      {category.posts.map((post, index) => {
        return (
          <li
            onClick={scroll}
            className="nav-item"
            data-target={post.slug}
            ref={scrollRefs[post.slug]}
          >
            <span>{index + 1}</span> {post.title.rendered}
          </li>
        )
      })}
    </nav>
  )
}
