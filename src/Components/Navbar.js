import React, { Component } from "react";
import './Style.css';
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg text-primary bg-light">
  <div className="container-fluid">
    <a className="navbar-brand  Hover Anchor" href="">News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse LeftShift" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
       <li className="nav-item"><a className="nav-link" aria-current="page" href="/business">business</a></li>
      <li className="nav-item"><a className="nav-link" aria-current="page" href="/entertainment">entertainment</a></li>
      <li className="nav-item"><a className="nav-link" aria-current="page" href="/general">general</a></li>
      <li className="nav-item"><a className="nav-link" aria-current="page" href="/health">health</a></li>
      <li className="nav-item"><a className="nav-link" aria-current="page" href="/science">science</a></li>
      <li className="nav-item"><a className="nav-link" aria-current="page" href="/sports">sports</a></li>
      <li className="nav-item"><a className="nav-link" aria-current="page" href="/technology">technology</a></li>  

    </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default Navbar;
