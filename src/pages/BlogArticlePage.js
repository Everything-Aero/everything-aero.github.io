import React, {useEffect, useState} from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import {useParams} from 'react-router-dom';
import { server_url, breadcrumbs } from '../links';
import parse from 'html-react-parser';
import axios from 'axios';

export default function BlogArticlePage() {
  const {blogid} = useParams();
  const [article, setArticle] = useState({title: '', article: `<div><h1 style={{textAlign: 'center'}}>Loading...</h1></div>`});
  useEffect(() => {
    axios.get(server_url + '/blog/url/' + blogid)
      .then(res => {
        setArticle(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  },[blogid])
  return(
    <main id="main">
      <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.blog, {label: article.title}]} />
      <div class="blogpage-inner">
        {
          parse(article.article)
        }
      </div>
    </main>
  )
}