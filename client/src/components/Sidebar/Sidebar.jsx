import React from 'react'

export default function Sidebar(props) {
  const { mobNav } = props
  const scroll = () => {
    const myElement = document.getElementById('hello')
    const topPos = myElement.offsetTop
    document.getElementById('main').scrollTop = topPos - 100
  }

  return (
    <aside onClick={scroll} className={mobNav ? 'Sidebar open' : 'Sidebar'}>
      Sidebar
    </aside>
  )
}
