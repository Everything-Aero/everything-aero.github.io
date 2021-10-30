import React from 'react';
import NewsArticleCard from '../components/NewsArticleCard';
import {breadcrumbs, companyName} from '../links';
import BreadCrumbs from '../components/BreadCrumbs';
import NewsSidebar from '../components/NewsSidebar';

/*eslint-disable*/
const articles = [
  {title: 'News 1', posterSrc: "assets/img/pexels-photo-615060.jpeg", author: "Author", date: "Date", description: "We can put some random content over here.", url: '/news/news1'},
  {title: 'News 2', posterSrc: "assets/img/pexels-photo-615060.jpeg", author: "Author", date: "Date", description: "We can put some random content over here.", url: "/news/news2"},
  {title: 'News 3', posterSrc: "assets/img/pexels-photo-615060.jpeg", author: "Author", date: "Date", description: "We can put some random content over here.", url: "/news/news3"},
  {title: 'News 4', posterSrc: "assets/img/pexels-photo-615060.jpeg", author: "Author", date: "Date", description: "We can put some random content over here.", url: "/news/news4"},
]

export default function NewsPage() {
  document.title = "News | " +companyName;
  // Get request with useEffect to query news articles
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.news]}/>

      <section id="news" class="news">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-8 entries">
              <div class="news-pagination">
                {
                  articles.map(article => <NewsArticleCard article={article}/>)
                }
                <ul class="justify-content-center">
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div>
            </div>
            <NewsSidebar/>
          </div>
        </div>
      </section>
    </main>
  );
}