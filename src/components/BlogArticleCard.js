import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function BlogArticleCard(props) {
  const {title, subtitle, description, posterSrc, url} = props.article;
  return(
    <div class="col-lg-4 col-md-6 blog-item filter-app">
      <div class="blog-wrap">
        <img src={posterSrc} class="img-fluid" alt=""/>
        <div class="blog-info">
          <h4>{title}</h4>
          <p>{subtitle}</p>
          <div class="blog-links">
            <a href={posterSrc} data-gallery="portfolioGallery" class="blog-lightbox" title="Preview">
              <div class="glightbox-desc">
                <div class="description_custom">
                  {
                    parse(description)
                  }
                </div>
              </div>
              <br/>
              <i class="fas fa-eye"></i>
            </a>
            <br/>
            <Link to={url} class="btn-get-started animate__animated animate__fadeInUp" title="Read More">Read More</Link>
          </div>
        </div>
      </div>
      <div class="info-space">
        <h3>{subtitle}</h3>
      </div>
    </div>
  )
}