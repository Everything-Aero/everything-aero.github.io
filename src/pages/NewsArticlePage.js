import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import NewsSidebar from '../components/NewsSidebar';
import {breadcrumbs, server_url} from '../links';
import parse from 'html-react-parser';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { Container, Button } from 'react-floating-action-button';

export default function NewsArticlePage() {
  const {newsid} = useParams();
  const history = useHistory();
  const [article, setArticle] = useState({title: '', url: '', _id: '', article: `<div><h1 style={{textAlign: 'center'}}>Loading...</h1></div>`});
  useEffect(() => {
    axios.get(server_url + '/news/url/' + newsid)
      .then(res => {
        if(res.status === 200 && res.data["article"] !== undefined) {
          setArticle(res.data)
        }
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
      <Container styles={{
        bottom: '20px',
        right: '20px'
      }}>
        <Button
          className="btn-floating btn-large"
          icon="fas fa-edit"
          tooltip="Edit article"
          onClick={() => {
            history.push('/editor/news?url=' + article.url)
          }}
          styles={{
            backgroundColor: '#15316E',
            color: '#fff',
          }}
        />
        <Button
          className="btn-floating btn-large"
          icon="fas fa-trash"
          tooltip="Delete article"
          onClick={() => {
            axios.delete(server_url + '/news/' + article._id)
            .then(res => console.log(res))
            .catch(err => console.error(err))
            history.push('/news')
          }}
          styles={{
            backgroundColor: '#15316E',
            color: '#fff',
          }}
        />
        <Button
          className="btn-floating btn-large"
          icon="fas fa-plus"
          rotate={true}
          tooltip="Create new article"
          onClick={() => {
            history.push('/editor/news')
          }}
          styles={{
            backgroundColor: '#15316E',
            color: '#fff',
          }}
        />
      </Container>
    </main>
  )
}