import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {routes} from '../links';

// Make purely reactive
export default function Header() {
  const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <li className={match ? "is-active" : ""}>
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
        
        <nav id="navbar" class="navbar">
          <ul>
          {
            routes.map(ele => MenuLink(ele))
          }
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}