import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import NewsArticleCard from '../components/NewsArticleCard';
import {breadcrumbs, companyName, server_url} from '../links';
import BreadCrumbs from '../components/BreadCrumbs';
import NewsSidebar from '../components/NewsSidebar';
import axios from 'axios';
import { Container, Button } from 'react-floating-action-button';

/*eslint-disable*/

export default function NewsPage() {
  document.title = "News | " +companyName;
  const [articles, setArticles] = useState([]);
  const history = useHistory();
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

      <Container styles={{
        bottom: '20px',
        right: '20px'
      }}>
        <Button
          className="btn-floating btn-large"
          icon="fas fa-plus"
          tooltip="Create new article"
          onClick={() => {
            history.push('/editor/news');
          }}
          styles={{
            backgroundColor: '#15316E',
            color: '#fff',
          }}
        />
      </Container>
    </main>
  );
}