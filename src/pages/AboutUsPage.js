import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { breadcrumbs, companyName } from '../links';

export default function AboutUsPage() {
  document.title = "About Us | " + companyName;
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.about]}/>
    </main>
  )
}