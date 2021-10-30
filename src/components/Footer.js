import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable */
export default function Footer() {
  return(
    <footer id="footer">

      <div class="footer-newsletter">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our monthly/weekly newsletter airdrop</p>
            </div>
            <div class="col-lg-6">
              <form action="formsuccess.html" name="contact" method="POST" data-netlify="true">
                <input type="email" name="email"/>
                <input type="submit" value="Subscribe"/>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                <li><i class="bx bx-chevron-right"></i> <Link to="">About us</Link></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                RV College Of Engineering, Mysore Road, Bengaluru - 560043<br/><br/>
                <strong>Phone:</strong> +91 95380 99536<br/>
                <strong>Email:</strong> everythingaeroofficial@gmail.com<br/>
              </p>

            </div>

            <div class="col-lg-6 col-md-6 footer-info">
              <h3>About <span class="text-shadoww"><span class="Everything-Text-White">Everything</span><span class="Aero-Text-Grey">Aero</span></span></h3>
              <p>A dedicated group of engineers working together to bring the enthralling world of aviation and space technology right to your fingertips.</p>
              <div class="social-links mt-3">
                <a href="https://wa.me/9538099536" target="_blank" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=everythingaeroofficial@gmail.com&tf=1" target="_blank" class="message"><i class="bx bx-envelope"></i></a>
                <a href="https://instagram.com/everything.aero" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/company/everything-aero" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>EverythingAero</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}