import React from 'react'

export default function Header(props) {
  const { toggleMobNav } = props

  return (
    <header className="Header">
      <h4 className="logo">my local deli</h4>
      <p className="tagline">
        {' '}
        Vendor Knowledgebase
        <i class="fa-brands fa-connectdevelop"></i>
      </p>
      <button onClick={toggleMobNav} className="nav-btn">
        <i class="fa-solid fa-bars"></i>
      </button>
    </header>
  )
}
