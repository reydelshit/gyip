import React from 'react'

import "../App.css"

const Header = () => {

  const reload = () => {
    window.location.reload()
    return false
  }

  return (
    <header>
        <div>
            <span onClick={reload}>gyip</span>
        </div>
        <div>
            <a href="https://github.com/reydelshit/gyip" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
    </header>
  )
}

export default Header