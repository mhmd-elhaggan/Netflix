import React from 'react';
import { NavLink } from "react-router-dom";
const logoUrl = require('../icons/logo.png');
export default function Navbar(){
  

    return(
        <nav className="navbar navbar-expand-lg navbar-red bg-warning bg-gradient sticky-center ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
          <div className="navbar-logo-container">
            <img className="navbar-logo" src={logoUrl} alt='navbar-logo' />
            </div>
            </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"  activeClassName="activeRoute"
           activeStyle={{ color: 'red' }} to={"/"} exact={true}><h3>Movies</h3></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/favorites"} activeClassName="activeRoute"
           activeStyle={{ color: 'red' }} ><h3>Favorites</h3></NavLink></li>
                <li className="nav-item">
                <NavLink className="nav-link order-3" to={"/register"} activeClassName="activeRoute"
           activeStyle={{ color: 'red' }}><h3>contact us</h3></NavLink></li>
                
            </ul>
          </div>
        </div>
      </nav>
    )
}