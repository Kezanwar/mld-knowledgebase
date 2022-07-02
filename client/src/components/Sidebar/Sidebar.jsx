import React from 'react'

export default function Sidebar(props) {
  const { mobNav } = props

  const scroll = (e) => {
    const targetEl = document.getElementById(e.target.dataset.target)
    const topPos = targetEl.offsetTop
    document.getElementById('main').scrollTop = topPos - 100
  }

  return (
    <aside className={mobNav ? 'Sidebar open' : 'Sidebar'}>
      <p data-target={'Dashboard'} onClick={scroll}>
        Dashboard
      </p>
    </aside>
  )
}
