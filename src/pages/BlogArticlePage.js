import React, {useEffect, useState} from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import {useParams, useHistory} from 'react-router-dom';
import { server_url, breadcrumbs } from '../links';
import parse from 'html-react-parser';
import axios from 'axios';
import {Container, Button} from 'react-floating-action-button';

export default function BlogArticlePage() {
  const {blogid} = useParams();
  const history = useHistory();
  const [article, setArticle] = useState({title: '', url: '', _id: '', article: `<div><h1 style={{textAlign: 'center'}}>Loading...</h1></div>`});
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
      <Container styles={{
        bottom: '20px',
        right: '20px'
      }}>
        <Button
          className="btn-floating btn-large"
          icon="fas fa-edit"
          tooltip="Edit article"
          onClick={() => {
            history.push('/editor/blog?url=' + article.url)
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
            axios.delete(server_url + '/blog/' + article._id)
            .then(res => console.log(res))
            .catch(err => console.error(err))
            history.push('/blog')
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
            history.push('/editor/blog')
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