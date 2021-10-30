import React, { useEffect, useState } from 'react';
import NewsArticleCard from '../components/NewsArticleCard';
import {breadcrumbs, companyName, server_url} from '../links';
import BreadCrumbs from '../components/BreadCrumbs';
import NewsSidebar from '../components/NewsSidebar';
import axios from 'axios';

/*eslint-disable*/

export default function NewsPage() {
  document.title = "News | " +companyName;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(server_url + '/news/')
      .then(res => {
        setArticles(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
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