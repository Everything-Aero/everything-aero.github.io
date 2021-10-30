import React from 'react';
import BlogArticleCard from '../components/BlogArticleCard';
import BreadCrumbs from '../components/BreadCrumbs';
import {breadcrumbs, companyName} from '../links';

const articles = [
  {
    title: 'SpaceX', 
    subtitle: 'What is SpaceX?', 
    description: `<h1>This is a heading</h1><p>This can be used to put a paragraph for summary</p><p>You can add links and any HTML you want</p>`,
    posterSrc: process.env.PUBLIC_URL + "assets/img/crs20_streak1.jpg",
    url: '/blog/blog1'
  },
  {
    title: 'SpaceX', 
    subtitle: 'What is SpaceX?', 
    description: `<h1>This is a heading</h1><p>This can be used to put a paragraph for summary</p><p>You can add links and any HTML you want</p>`,
    posterSrc: process.env.PUBLIC_URL + "assets/img/crs20_streak1.jpg",
    url: '/blog/blog2'
  },
  {
    title: 'SpaceX', 
    subtitle: 'What is SpaceX?', 
    description: `<h1>This is a heading</h1><p>This can be used to put a paragraph for summary</p><p>You can add links and any HTML you want</p>`,
    posterSrc: process.env.PUBLIC_URL + "assets/img/crs20_streak1.jpg",
    url: '/blog/blog3'
  },
  {
    title: 'SpaceX', 
    subtitle: 'What is SpaceX?', 
    description: `<h1>This is a heading</h1><p>This can be used to put a paragraph for summary</p><p>You can add links and any HTML you want</p>`,
    posterSrc: process.env.PUBLIC_URL + "assets/img/crs20_streak1.jpg",
    url: '/blog/blog4'
  },
]

export default function BlogPage() {
  document.title = "Blog | " + companyName;
  // Get request with useEffect to get blog articles
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