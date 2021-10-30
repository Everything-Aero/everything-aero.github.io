import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import NewsSidebar from '../components/NewsSidebar';
import {breadcrumbs, server_url} from '../links';
import parse from 'html-react-parser';
import axios from 'axios';
import { useParams } from 'react-router';

export default function NewsArticlePage() {
  const {newsid} = useParams();
  const [article, setArticle] = useState({title: '', article: `<div><h1 style={{textAlign: 'center'}}>Loading...</h1></div>`});
  useEffect(() => {
    axios.get(server_url + '/news/url/' + newsid)
      .then(res => {
        setArticle(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  },[newsid]);
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.news, {label: article.title}]}/>
      <section id="news" class="news">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-8 entries">
              {
                parse(article.article)
              }
            </div>
            <NewsSidebar/>
          </div>
        </div>
      </section>
    </main>
  )
}