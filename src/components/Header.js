import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {routes} from '../links';

export default function Header() {
  const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <li className={match ? "is-active nav-item" : "nav-item"}>
        <Link style={{textDecoration: 'none'}} className={match ? "active" : ""} to={to}>{label}</Link>
      </li>
    );
  }
  return(
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
          <Link to='/'><img src="assets/img/logov2.png" alt="" class="img-fluid"/></Link>
        </div>
        <div class="logo-text">
          <h1><Link to='/'><span class="Everything-Text">Everything</span><span class="Aero-Text">Aero</span></Link></h1>
        </div>
        
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {
              routes.map(ele => MenuLink(ele))
            }
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}