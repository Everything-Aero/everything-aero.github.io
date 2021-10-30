import React from 'react';
import {Link} from 'react-router-dom';

export default function NewsArticleCard(props) {
  const {title, posterSrc, author, date, description, url} = props.article;
  return (
    <article class="entry">
      <div class="entry-img">
        <img src={process.env.PUBLIC_URL + posterSrc} alt="" class="img-fluid"/>
      </div>

      <h2 class="entry-title">
        <a href="news-single.html">{title}</a>
      </h2>

      <div class="entry-meta">
        <ul>
          <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="news-single.html">{author}</a></li>
          <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="news-single.html"><time datetime="2020-01-01">{date}</time></a></li>
        </ul>
      </div>

      <div class="entry-content">
        <p>
          {description}
        </p>
        <div class="read-more">
          <Link to={'/news/' + url}>Read More</Link>
        </div>
      </div>

    </article>
  )
}