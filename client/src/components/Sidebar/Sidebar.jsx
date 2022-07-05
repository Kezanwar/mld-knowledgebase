import React, { useContext } from 'react'
import { ScrollSectionContext, PostAndCats } from '../ContextProvider'
import NavBlock from './NavBlock'

export default function Sidebar(props) {
  const { mobNav } = props
  const scrollRefs = useContext(ScrollSectionContext)
  const filteredPostsByCategories = useContext(PostAndCats)
  const scroll = (e) => {
    const targetEl = document.getElementById(e.target.dataset.target)
    const topPos = targetEl.offsetTop
    document.getElementById('main').scrollTop = topPos - 120
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
          <NavBlock
            category={category}
            scroll={scroll}
            scrollRefs={scrollRefs}
          />
        )
      })}
    </aside>
  )
}
