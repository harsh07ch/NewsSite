import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/">General</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}