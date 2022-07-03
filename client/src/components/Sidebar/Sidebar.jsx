import React, { useContext } from 'react'
import { ScrollSectionContext, PostAndCats } from '../ContextProvider'

export default function Sidebar(props) {
  const { mobNav } = props
  const scrollRefs = useContext(ScrollSectionContext)
  const filteredPostsByCategories = useContext(PostAndCats)
  const scroll = (e) => {
    const targetEl = document.getElementById(e.target.dataset.target)
    const topPos = targetEl.offsetTop
    document.getElementById('main').scrollTop = topPos - 100
  }

  // console.log(scrollRefs)
  // console.log(filteredPostsByCategories)

  return (
    <aside className={mobNav ? 'Sidebar open' : 'Sidebar'}>
      {/* <p ref={scrollRefs.Dashboard} data-target={'Dashboard'} onClick={scroll}>
        Dashboard
      </p> */}
      {filteredPostsByCategories.map((category) => {
        return (
          <nav className="Nav-block">
            <h4>{category.title}</h4>
            {category.posts.map((post, index) => {
              return (
                <li ref={scrollRefs[post.slug]}>
                  <span>{index + 1}.</span> {post.title.rendered}
                </li>
              )
            })}
          </nav>
        )
      })}
    </aside>
  )
}
