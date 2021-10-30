import React from 'react';

// Make it purely reactive
const HeroCarousel = () => {
  return (
    <section id="hero">
      <div class="hero-container">
        <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
          <div class="carousel-inner" role="listbox">

            <div class="carousel-item active">
              <video autoplay muted loop id="bg-video">
                <source src={process.env.PUBLIC_URL + "assets/img/welcomeVideo2.mp4"} type="video/mp4" />
              </video>
              <div class="carousel-container">
                <div class="carousel-content">
                  <div class="panell">
                  <h2 class="animate__animated animate__fadeInDown">Welcome to <span class="Everything-Text">Everything</span><span class="Aero-Text">Aero</span></h2>
                  <p class="animate__animated animate__fadeInUp">A dedicated group of engineers working together to bring the enthralling world of aviation and space technology right to your fingertips.</p>
                  <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                </div>
                </div>
              </div>
            </div>

            {/* <div class="carousel-item" style={{background: 'url(assets/img/sat.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <div class="carousel-container">
                <div class="carousel-content">
                  <div class="panell">
                  <h2 class="animate__animated animate__fadeInDown">Welcome to <span class="Everything-Text">Everything</span><span class="Aero-Text">Aero</span></h2>
                    <p class="animate__animated animate__fadeInUp">A dedicated group of engineers working together to bring the enthralling world of aviation and space technology right to your fingertips.</p>
                    <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="carousel-item" style={{background: 'url(assets/img/pexels-photo-615060.jpeg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <div class="carousel-container">
                <div class="carousel-content">
                  <div class="panell">
                    <h2 class="animate__animated animate__fadeInDown">Welcome to <span class="Everything-Text">Everything</span><span class="Aero-Text">Aero</span></h2>
                    <p class="animate__animated animate__fadeInUp">A dedicated group of engineers working together to bring the enthralling world of aviation and space technology right to your fingertips.</p>
                    <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                  </div>
                </div>
              </div>
            </div> */}

          </div>

          <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

        </div>
      </div>
    </section>
  );
}

const FeaturedBoxes = () => {
  const featured = [
    {link: '', icon: 'bi bi-info-circle', name: 'About Us', paragraph: 'A dedicated group of engineers working together to bring the enthralling world of aviation and space technology right to your fingertips.'},
    {link: '', icon: 'bi bi-card-checklist', name: 'Blog', paragraph: 'A wide range of articles and blog about everything related to aerospace, posted weekly!'},
    {link: '', icon: 'bi bi-newspaper', name: 'News', paragraph: 'Your latest and current news to keep you updated at every instant!'}
  ]
  return(
    <section id="featured" class="featured">
      <div class="container">
        <div class="row">
        {
          featured.map((ele) => (
            <div class="col-lg-4">
              <div class="icon-box">
                <i class={ele.icon}></i>
                <h3><span class="underline-effect"><a style={{textDecoration: 'none'}} href={ele.link}>{ele.name}</a></span></h3>
                <p>{ele.paragraph}</p>
              </div>
              <div class="icon-box-border"></div>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}

const AboutEA = () => {
  return(
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/img/circle-cropped.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content">
            <h3>What is <span class="Everything-Text">Everything</span><span class="Aero-Text">Aero</span>?</h3>
            <p class="fst-italic">
              Let's think of something to put here. I just don't know what to write. I can't be repating the same thing again and again.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Feature 1</li>
              <li><i class="bi bi-check-circle"></i> Feature 2</li>
              <li><i class="bi bi-check-circle"></i> Feature 3</li>
            </ul>
            <p>
              Just put some general bullshit here, I don't even know what we can put here. We might even remove this part, but then the home page will look really short and dull so might add something. Need Design team's help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const services = [
    {icon: 'bx bxl-dribbble', link: '', name: 'Supersonic News', paragraph: 'Get any aerospace-related news from around the world in an instant'},
    {icon: 'bx bx-file', link: '', name: 'Elevated Content', paragraph: 'Read the best quality content researched and curated with extreme care and patience'},
    {icon: 'bx bx-tachometer', link: '', name: 'Short-Haul Blogs', paragraph: 'Read most informative blogs in the shortest of the time'},
    {icon: 'bx bx-world', link: '', name: 'Machs and Academics', paragraph: 'Get help for your academics from our content and improve your marks'},
    {icon: 'bx bx-slideshow', link: '', name: 'Birds of a feather', paragraph: 'One stop community-based environment for aerospace related questions'},
    {icon: 'bx bx-arch', link: '', name: 'Streamlined website', paragraph: 'Carefully designed website to improve your productivity'}
  ]
  return(
    <section id="services" class="services">
      <div class="container">
        <div class="row">
          {
            services.map(ele => (
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon"><i class={ele.icon}></i></div>
                  <h4><a href={ele.link}>{ele.name}</a></h4>
                  <p>
                    {ele.paragraph}
                    </p>
                </div>
              </div>
            ))
          }
          

        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return(
    <>
      <HeroCarousel/>
      <FeaturedBoxes/>
      <AboutEA/>
      <Services/>
    </>
  )
}