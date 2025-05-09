import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark "  >
  <div className="container-fluid text-White " >
    <Link className="navbar-brand" to="" >NewsMonkey </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/business">business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">general</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">technology</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="">Action</a></li>
            <li><a className="dropdown-item" to="">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default Navbar
