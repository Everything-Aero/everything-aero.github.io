import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogArticleCard from '../components/BlogArticleCard';
import BreadCrumbs from '../components/BreadCrumbs';
import { useHistory } from 'react-router';
import {server_url, breadcrumbs, companyName} from '../links';
import {Container, Button} from 'react-floating-action-button';

export default function BlogPage() {
  document.title = "Blog | " + companyName;
  const [articles, setArticles] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get(server_url + '/blog')
      .then(res => {
        setArticles(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  })
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.blog]} />
      <section id="blog" class="blog">
        <div class="container">
          <div class="row blog-container">
            {
              articles.map(article => <BlogArticleCard article={article}/>)
            }
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
            history.push('/editor/blog');
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