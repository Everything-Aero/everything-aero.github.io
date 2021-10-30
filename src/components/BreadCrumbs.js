import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadCrumbs(props) {
  const {crumbs} = props;
  return(
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <ol>
          {
            crumbs.slice(0, crumbs.length - 1).map(crumb => (
              <li>
                <Link to={crumb.to} key={crumb.to}>
                  {crumb.label}
                </Link>
              </li>
            ))
          }
          <li>{crumbs[crumbs.length-1].label}</li>
        </ol>
        <h2>{crumbs[crumbs.length-1].label}</h2>
      </div>
    </section>
  )
}