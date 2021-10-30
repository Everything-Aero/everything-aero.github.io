import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { breadcrumbs, companyName } from '../links';

export default function AboutUsPage() {
  document.title = "About Us | " + companyName;
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.about]}/>
      <section id="about" class="about">
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <img src="assets/img/circle-cropped.png" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Welcome to <span class="Everything-Text">Everything</span><span class="Aero-Text">Aero</span>. We’re glad and grateful you’re here!</h3>
              <p class="fst-italic">
                EverythingAero exists to provide a trusted learning and development system for all who are interested in the Aerospace sector. We are a team of engineers based in Bengaluru working to get the world’s exhilarating articles about planes and rockets to everyone’s fingertips. What you might find on the website:
              </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> Interesting articles on the science and businesses in Aerospace sector</li>
                <li><i class="bi bi-check-circle"></i> Like-minded community that can help in overall upliftment of the enthusiasm in Aerospace</li>
                <li><i class="bi bi-check-circle"></i> Information on cutting-edge technologies in the industry</li>
              </ul>
              <p>
                Our mission is to provide information to you as simple as possible, but no simpler. Clear, crisp and a lively website for you to enrich your knowledge and interest.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id="counts" class="counts">
        <div class="container">
          <div class="row no-gutters">

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="1000" data-purecounter-duration="1" class="purecounter">1000</span>
                <p><strong>Happy Users</strong> coming to the website</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" class="purecounter">5</span>
                <p><strong>Sections</strong> to explore!</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" class="purecounter">24</span>
                <p><strong>Hours Of Support</strong> from us</p>
                
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-people"></i>
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">15</span>
                <p><strong>Hard Workers</strong> and expanding</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}