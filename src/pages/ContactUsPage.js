import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { breadcrumbs, companyName } from '../links';

export default function ContactUsPage() {
  document.title = "Contact Us | " + companyName;
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.contact]}/>
      <section id="contact" class="contact">
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <div class="info-box address mb-4">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Our Address</h3>
                <p>RV College Of Engineering, Mysore Road, Bengaluru - 560043</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="info-box email mb-4">
                <i class="fas fa-envelope"></i>
                <h3>Email Us</h3>
                <p>everythingaeroofficial@gmail.com</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="info-box phone mb-4">
                <i class="fas fa-phone-alt"></i>
                <h3>Call Us</h3>
                <p>+91 95380 99536</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 ">
              <iframe title="College location" class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251482153!3d12.923722790887295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sRV%20College%20of%20Engineering%C2%AE!5e0!3m2!1sen!2sin!4v1623680127464!5m2!1sen!2sin" frameborder="0" style={{border:0, width: '100%', height: '384px'}} allowfullscreen></iframe>
            </div>
            <div class="col-lg-6">
              <form action="https://formspree.io/f/xwkaqnrn" method="post" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}