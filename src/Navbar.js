import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
          

          <ul className="middle">
          <img className="logo" src="https://pngimg.com/d/tesla_logo_PNG18.png" alt="Tesla"></img>
              <li >
                  <a href="#">Model S</a>
              </li>
              <li>
                  <a href="#">Model 3</a>
              </li>
              <li>
                  <a href="#">Model X</a>
              </li>
              <li>
                  <a href="#">Model Y</a>
                  </li>
              <li>
                  <a href="#">Solar Roof</a>
                  </li>
              <li>
                  <a href="#">Solar Panles</a>
                  </li>
                  <li>
          
                  <a href="#">Shop</a>
                  </li>
                  <li>
                  <a href="#">Account</a>
                  </li>
                  <li>
                  <a href="#">Menu</a>
                  </li>
          </ul>
      </nav>
          <div className="backgr">
             
          </div>
         
    </div>
  )
}
