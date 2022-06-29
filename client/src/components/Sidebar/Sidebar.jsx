import React from 'react'

export default function Sidebar() {
  const scroll = () => {
    const myElement = document.getElementById('hello')
    const topPos = myElement.offsetTop
    document.getElementById('main').scrollTop = topPos - 100
  }

  return (
    <aside onClick={scroll} className="Sidebar">
      Sidebar
    </aside>
  )
}
