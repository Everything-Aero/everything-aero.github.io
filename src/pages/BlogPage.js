import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogArticleCard from '../components/BlogArticleCard';
import BreadCrumbs from '../components/BreadCrumbs';
import {server_url, breadcrumbs, companyName} from '../links';

export default function BlogPage() {
  document.title = "Blog | " + companyName;
  const [articles, setArticles] = useState([]);
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
    </main>
  )
}