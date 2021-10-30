import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { breadcrumbs, companyName } from '../links';

export default function ContactUsPage() {
  document.title = "Contact Us | " + companyName;
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.contact]}/>
    </main>
  )
}