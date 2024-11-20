import React from 'react'

export default function Header() {
  return (
    <div>
      <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer">
          <i className="fa-regular fa-moon" />
          &nbsp;&nbsp;Dark Mode
        </p>
      </div>
    </header>
    </div>
  )
}
