import React from 'react';

export default function NewsSidebar() {
  return(
    <div class="col-lg-4">
      <div class="sidebar">
        <h3 class="sidebar-title">Search</h3>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <div id="searchUsers" class="instant-search">
          <div class="instant-search__input-container">
            <input class="instant-search__input" type="text" spellcheck="false"/>
            <i class="material-icons instant-search__icon">search</i>
          </div>
        </div>
        <h3 class="sidebar-title">Recent Posts</h3>
        <div class="sidebar-item recent-posts">
          <div class="post-item clearfix">
            <img src="assets/img/artur-tumasjan-KZSNMN4VxR8-unsplash.jpg" alt=""/>
            <h4><a href="news-single.html">Recent 1</a></h4>
            <time datetime="2020-01-01">Date</time>
          </div>

          <div class="post-item clearfix">
            <img src="assets/img/stre.jpg" alt=""/>
            <h4><a href="news-single.html">Recent 2</a></h4>
            <time datetime="2020-01-01">Date</time>
          </div>

          <div class="post-item clearfix">
            <img src="assets/img/sat.png" alt=""/>
            <h4><a href="news-single.html">Recent 3</a></h4>
            <time datetime="2020-01-01">Date</time>
          </div>

          <div class="post-item clearfix">
            <img src="assets/img/An124IAF4.jpeg" alt=""/>
            <h4><a href="news-single.html">Recent 4</a></h4>
            <time datetime="2020-01-01">Date</time>
          </div>

          <div class="post-item clearfix">
            <img src="assets/img/sat.png" alt=""/>
            <h4><a href="news-single.html">Recent 5</a></h4>
            <time datetime="2020-01-01">Date</time>
          </div>

        </div>
      </div>
    </div>
  )
}